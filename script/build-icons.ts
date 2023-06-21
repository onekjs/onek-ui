import path from 'path';
import fs from 'fs';
import glob from 'glob';
import { iconsPath, runBuild } from './utils';

const iconsSpritesName = 'icons-sprites';

interface Icon {
  name: string;
  componentName: string;
  path: string;
  import?: string;
}

function getSVGData(): Icon[] {
  const data: Icon[] = [];
  const files = glob.sync(`svg/*.svg`, {
    cwd: iconsPath + '/src',
    absolute: true
  });
  for (const filePath of files) {
    const name = `icon-${path.basename(filePath, '.svg')}`;
    data.push({
      name,
      componentName: name.replaceAll('-', '_'),
      path: filePath
    });
  }
  return data;
}

function compilerIconSprites(data: Icon[]) {
  let symbol_str = '';
  if (!fs.existsSync(`${iconsPath}/src`)) {
    fs.mkdirSync(`${iconsPath}/src`);
  }
  for (let i = 0; i < data.length; i++) {
    const svgFile = fs.readFileSync(data[i].path, 'utf8');
    const pathRegex = /<path[^>]*>/;
    let svgPath = svgFile.match(pathRegex)![0];
    svgPath = svgPath.replace(/fill="#[a-zA-Z0-9]+"/g, '');
    const symbol = `<symbol id="${data[i].name}"  viewBox="0 0 1024 1024">${svgPath}</symbol>`;
    symbol_str += symbol;
  }
  const outputData = `const iconSprites =
  '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbol_str}</svg>';
export { iconSprites }
`;
  const spritesName = `${iconsPath}/src/${iconsSpritesName}.js`;
  fs.writeFileSync(spritesName, outputData);

  const loadStr = `import { iconSprites } from './${iconsSpritesName}';

export const loadSprites = () => {
  const svg = document.createElement('div');
  svg.setAttribute('aria-hidden', 'true');
  svg.style = 'display: none';
  svg.innerHTML += iconSprites;
  const ref = document.body.firstChild;
  document.body.insertBefore(svg, ref);
};
`;
  const loadName = `${iconsPath}/src/load.js`;
  fs.writeFileSync(loadName, loadStr);
}

function createComponent(data: Icon[]) {
  if (!fs.existsSync(`${iconsPath}/src/components`)) {
    fs.mkdirSync(`${iconsPath}/src/components`);
  }
  for (let i = 0; i < data.length; i++) {
    const svgFile = fs.readFileSync(data[i].path, 'utf8');
    const pathRegex = /<path[^>]*>/;
    let path = svgFile.match(pathRegex)![0];
    path = path.replace(/fill="#[a-zA-Z0-9]+"/g, '');
    const svgElement = `<svg class="o-icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">${path}</svg>`;
    const iconTemplate = `<template>
  ${svgElement}
</template>

<script lang="ts">
export default {
  name: 'o-${data[i].name}'
};
</script>

<script lang="ts" setup>
import { computed, CSSProperties, onMounted } from 'vue';

type Props = {
  type?: string;
  name?: string;
  size?: number | string;
  rotate?: number;
};

const props = withDefaults(defineProps<Props>(), {
  name: 'loading',
  type: 'svg',
  size: 0,
  rotate: 0
});

const isNumber = (val: number | string) => {
  return typeof val === 'number';
};

const innerStyle = computed(() => {
  const styles: CSSProperties = {};
  if (props.size) {
    styles.fontSize = isNumber(props.size) ? props.size + 'px' : props.size;
  }
  if (props.rotate) {
    styles.transform = 'rotate(' + props.rotate + 'deg)';
  }
  return styles;
});

const iconName = computed(() => {
  let hash = props.type === 'svg' ? '#' : '';
  return hash + 'icon-' + props.name;
});
</script>
`;
    const iconName = `${iconsPath}/src/components/${data[i].name}.vue`;
    fs.writeFileSync(iconName, iconTemplate);
    data[
      i
    ].import = `import ${data[i].componentName} from './src/components/${data[i].name}.vue'`;
  }
}

function createMain(icons: Icon[]) {
  let imports = `export { default as icon_list } from './icon-list-json.json';\n`;
  let components = ``;
  const icons_list = [];
  for (let i = 0; i < icons.length; i++) {
    imports += icons[i]!.import! + ';\n';
    components += `app.component(${icons[i].componentName}.name, ${icons[i].componentName});\n`;
    icons_list.push({
      name: `o-${icons[i].name}`
    });
  }
  const iconTemplate = `${imports}
const Ions = {
  install: (app, options) => {
    ${components}
  }
};

export default Ions;
`;
  const iconJSON = `${iconsPath}/icon-list-json.json`;
  fs.writeFileSync(iconJSON, JSON.stringify(icons_list));
  const iconName = `${iconsPath}/index.js`;
  fs.writeFileSync(iconName, iconTemplate);
}

async function buildIcons() {
  const icons = getSVGData();
  compilerIconSprites(icons);
  createComponent(icons);
  createMain(icons);
  runBuild('pnpm run build', iconsPath);
}
buildIcons();
