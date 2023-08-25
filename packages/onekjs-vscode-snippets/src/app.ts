'use strict';

import {
  window,
  commands,
  ViewColumn,
  Disposable,
  TextDocumentContentProvider,
  Event,
  Uri,
  CancellationToken,
  workspace,
  CompletionItemProvider,
  ProviderResult,
  TextDocument,
  Position,
  CompletionItem,
  CompletionList,
  CompletionItemKind,
  SnippetString,
  Range,
  EventEmitter,
  HoverProvider,
  Hover,
  MarkdownString
} from 'vscode';
import * as TAG from './config/ui-tags.json';
import * as ICONTAG from './config/ui-icon-tags.json';
import ATTRS from './config/ui-attributes.js';
const TAGS = { ...TAG, ...ICONTAG };
const prettyHTML = require('pretty');
const WEB_URL = 'https://onekjs.github.io/onek-ui/components/';

export interface Query {
  path: string;
  label: string;
  detail: string;
  description: string;
}

export interface TagObject {
  text: string;
  offset: number;
}

export function encodeDocsUri(query?: Query): Uri {
  return Uri.parse(`onekjs-vscode-snippets://search?${JSON.stringify(query)}`);
}

export function decodeDocsUri(uri: Uri): Query {
  return <Query>JSON.parse(uri.query);
}

export class App {
  private _disposable!: Disposable;
  public WORD_REG: RegExp =
    /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/gi;

  getSeletedText() {
    let editor = window.activeTextEditor;

    if (!editor) {
      return;
    }

    let selection = editor.selection;

    if (selection.isEmpty) {
      let text = [];
      let range = editor.document.getWordRangeAtPosition(
        selection.start,
        this.WORD_REG
      );

      return editor.document.getText(range);
    } else {
      return editor.document.getText(selection);
    }
  }

  setConfig() {
    // https://github.com/Microsoft/vscode/issues/24464
    const config = workspace.getConfiguration('editor');
    const quickSuggestions = config.get('quickSuggestions');
    if (!quickSuggestions['strings']) {
      config.update('quickSuggestions', { strings: true }, true);
    }
  }

  openHtml(query, title) {
    const { label, detail } = query;
    const panel = window.createWebviewPanel(label, detail, ViewColumn.One, {
      enableScripts: true, // 启用JS，默认禁用
      retainContextWhenHidden: true // webview被隐藏时保持状态，避免被重置
    });

    // And set its HTML content
    panel.webview.html = this.getWebviewContent(query);
  }

  openDocs(
    query?: Query,
    title = 'onekjs-vscode-snippets',
    editor = window.activeTextEditor
  ) {
    this.openHtml(query, title);
  }

  dispose() {
    this._disposable.dispose();
  }

  getWebviewContent(query: Query) {
    const config = workspace.getConfiguration('onekjs-vscode-snippets');
    const linkUrl = config.get('link-url');
    const path = query.path;
    const iframeSrc = `${linkUrl}/components/${path}`;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Coding</title>
    </head>
    <body>
      <iframe style="position: absolute;border: none;left: 0;top: 0;width: 100%;height: 100%;" src="${iframeSrc}"></iframe>
    </body>
    </html>`;
  }
}

const HTML_CONTENT = (query: Query) => {
  const config = workspace.getConfiguration('onekjs-vscode-snippets');
  const linkUrl = config.get('link-url');
  const path = query.path;
  const iframeSrc = `${linkUrl}/components/${path}`;
  return `
    <body style="background-color: white">
    <iframe style="position: absolute;border: none;left: 0;top: 0;width: 100%;height: 100%;" src="${iframeSrc}"></iframe>
    </body>`;
};

export class OnekjsDocsContentProvider implements TextDocumentContentProvider {
  private _onDidChange = new EventEmitter<Uri>();

  get onDidChange(): Event<Uri> {
    return this._onDidChange.event;
  }

  public update(uri: Uri) {
    this._onDidChange.fire(uri);
  }

  provideTextDocumentContent(
    uri: Uri,
    token: CancellationToken
  ): string | Thenable<string> {
    return HTML_CONTENT(decodeDocsUri(uri));
  }
}
export class OnekjsHoverProvider implements HoverProvider {
  provideHover(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<Hover> {
    const range = document.getWordRangeAtPosition(position);
    const word = document.getText(range);
    const tag = TAGS[word];
    if (tag) {
      const website = new MarkdownString();
      website.isTrusted = true;
      website.supportHtml = true;
      const md = new MarkdownString();
      md.isTrusted = true;
      md.supportHtml = true;
      // 由于 vscode 无法显示 https://raw.githubusercontent.com 中的svg图片 ，所以暂时无法查看svg图片
      md.appendMarkdown(tag.description);
      // md.appendMarkdown(`<img src='${tag.description}' />`)
      website.appendMarkdown(`${WEB_URL}${tag['link']}/`);
      return new Hover([website, md]);
    }
  }
}

export class OnekjsCompletionItemProvider implements CompletionItemProvider {
  private document: TextDocument;
  private position: Position;
  private tagReg: RegExp = /<([\w-]+)\s+/g;
  private attrReg: RegExp = /(?:\(|\s*)(\w+)=['"][^'"]*/;
  private tagStartReg: RegExp = /<([\w-]*)$/;
  private pugTagStartReg: RegExp = /^\s*[\w-]*$/;
  private size: number;
  private quotes: string;

  getPreTag(): TagObject | undefined {
    let line = this.position.line;
    let tag: TagObject | string;
    let txt = this.getTextBeforePosition(this.position);

    while (this.position.line - line < 10 && line >= 0) {
      if (line !== this.position.line) {
        txt = this.document.lineAt(line).text;
      }
      tag = this.matchTag(this.tagReg, txt, line);
      if (tag === 'break') return;
      if (tag) return <TagObject>tag;
      line--;
    }
    return;
  }

  getPreAttr(): string {
    let txt = this.getTextBeforePosition(this.position).replace(
      /"[^'"]*(\s*)[^'"]*$/,
      ''
    );
    let end = this.position.character;
    let start = txt.lastIndexOf(' ', end) + 1;
    let parsedTxt = this.document.getText(
      new Range(this.position.line, start, this.position.line, end)
    );

    return this.matchAttr(this.attrReg, parsedTxt);
  }

  matchAttr(reg: RegExp, txt: string): any {
    let match: RegExpExecArray | null;
    match = reg.exec(txt);

    return !/"[^"]*"/.test(txt) && match;
  }

  matchTag(reg: RegExp, txt: string, line: number): any {
    let match: RegExpExecArray | null;
    let arr: TagObject[] = [];

    if (
      /<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) ||
      (this.position.line === line &&
        (/^\s*[^<]+\s*>[^<\/>]*$/.test(txt) ||
          /[^<>]*<$/.test(txt[txt.length - 1])))
    ) {
      return 'break';
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1],
        offset: this.document.offsetAt(new Position(line, match.index))
      });
    }
    return arr.pop();
  }

  getTextBeforePosition(position: Position): string {
    var start = new Position(position.line, 0);
    var range = new Range(start, position);
    return this.document.getText(range);
  }
  getTagSuggestion() {
    let suggestions = [];

    let id = 100;
    for (let tag in TAGS) {
      suggestions.push(this.buildTagSuggestion(tag, TAGS[tag], id));
      id++;
    }

    return suggestions;
  }

  getAttrValueSuggestion(tag: string, attr: string): CompletionItem[] {
    let suggestions = [];
    const values = this.getAttrValues(tag, attr);
    values.forEach((value) => {
      suggestions.push({
        label: value,
        kind: CompletionItemKind.Value
      });
    });
    return suggestions;
  }

  getAttrSuggestion(tag: string) {
    let suggestions = [];
    let tagAttrs = this.getTagAttrs(tag);
    let preText = this.getTextBeforePosition(this.position);
    let prefix = preText
      .replace(/['"]([^'"]*)['"]$/, '')
      .split(/\s|\(+/)
      .pop();
    // method attribute
    const method = prefix && prefix[0] === '@';
    // bind attribute
    const bind = prefix && prefix[0] === ':';

    prefix = prefix && prefix.replace(/[:@]/, '');

    if (prefix && /[^@:a-zA-z\s]/.test(prefix[0])) {
      return suggestions;
    }

    tagAttrs.forEach((attr) => {
      const attrItem = this.getAttrItem(tag, attr);
      if (attrItem && this.firstCharsEqual(attr, prefix)) {
        const sug = this.buildAttrSuggestion(
          { attr, tag, bind, method },
          attrItem
        );
        sug && suggestions.push(sug);
      }
    });
    // for (let attr in ATTRS) {
    //   const attrItem = this.getAttrItem(tag, attr);
    //   if (attrItem && attrItem.global && (!prefix.trim() || this.firstCharsEqual(attr, prefix))) {
    //     const sug = this.buildAttrSuggestion({attr, tag: null, bind, method}, attrItem);
    //     sug && suggestions.push(sug);
    //   }
    // }

    return suggestions;
  }

  buildTagSuggestion(tag, tagVal, id) {
    const snippets = [];
    let index = 0;
    let that = this;
    function build(tag, { subtags, defaults }, snippets) {
      let attrs = '';
      defaults &&
        defaults.forEach((item, i) => {
          attrs += ` ${item}=${that.quotes}$${index + i + 1}${that.quotes}`;
        });
      snippets.push(`${index > 0 ? '<' : ''}${tag}${attrs}>`);
      index++;
      subtags && subtags.forEach((item) => build(item, TAGS[item], snippets));
      snippets.push(`</${tag}>`);
    }
    build(tag, tagVal, snippets);

    return {
      label: tag,
      sortText: `0${id}${tag}`,
      insertText: new SnippetString(
        prettyHTML('<' + snippets.join(''), { indent_size: this.size }).substr(
          1
        )
      ),
      kind: CompletionItemKind.Snippet,
      detail: 'onekjs-vscode-snippets for Vue',
      documentation: tagVal.description
    };
  }

  buildAttrSuggestion(
    { attr, tag, bind, method },
    { description, type, optionType, defaultValue }
  ) {
    if (
      (method && type === 'method') ||
      (bind && type !== 'method') ||
      (!method && !bind)
    ) {
      let documentation = description;
      optionType && (documentation += '\n' + `type: ${optionType}`);
      defaultValue && (documentation += '\n' + `default: ${defaultValue}`);
      return {
        label: attr,
        insertText:
          type && type === 'flag'
            ? `${attr} `
            : new SnippetString(`${attr}=${this.quotes}$1${this.quotes}$0`),
        kind:
          type && type === 'method'
            ? CompletionItemKind.Method
            : CompletionItemKind.Property,
        detail: 'onekjs-vscode-snippets for Vue',
        documentation
      };
    } else {
      return;
    }
  }
  // 获取""引号内的内容
  getAttrValues(tag, attr) {
    let attrItem = this.getAttrItem(tag, attr);
    let options = attrItem && attrItem.options;
    if (!options && attrItem) {
      if (attrItem.optionType === 'boolean') {
        options = ['true', 'false'];
      }
    }
    return options || [];
  }

  getTagAttrs(tag: string) {
    return (TAGS[tag] && TAGS[tag].attributes) || [];
  }

  getAttrItem(tag: string | undefined, attr: string) {
    if (tag && tag.includes('o-icon')) {
      tag = 'o-icon';
    }
    return ATTRS[`${tag}/${attr}`] || ATTRS[`${tag}/${attr[1]}`];
  }

  isAttrValueStart(tag: Object | string | undefined, attr) {
    return tag && attr;
  }

  isAttrStart(tag: TagObject | undefined) {
    return tag;
  }

  isTagStart() {
    let txt = this.getTextBeforePosition(this.position);
    return this.tagStartReg.test(txt);
  }

  firstCharsEqual(str1: string, str2: string) {

    if (str1) {
      return str1.toLowerCase().indexOf(str2.toLowerCase()) !== -1;
    }
    return false;
  }
  // tentative plan for vue file
  notInTemplate(): boolean {
    let line = this.position.line;
    while (line) {
      if (/^\s*<script.*>\s*$/.test(<string>this.document.lineAt(line).text)) {
        return true;
      }
      line--;
    }
    return false;
  }

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<CompletionItem[] | CompletionList> {
    this.document = document;
    this.position = position;

    const config = workspace.getConfiguration('onekjs-vscode-snippets');
    this.size = config.get('indent-size');
    const normalQuotes = config.get('quotes') === 'double' ? '"' : "'";
    this.quotes = normalQuotes;

    let tag: TagObject | string | undefined = this.getPreTag();
    let attr = this.getPreAttr();
    if (this.isAttrValueStart(tag, attr)) {
      return this.getAttrValueSuggestion(tag!.text, attr);
    } else if (this.isAttrStart(tag)) {
      return this.getAttrSuggestion(tag!.text);
    } else if (this.isTagStart()) {
      switch (document.languageId) {
        case 'vue':
          return this.notInTemplate() ? [] : this.getTagSuggestion();
        case 'html':
          // todo
          return this.getTagSuggestion();
      }
    } else {
      return [];
    }
  }
}
