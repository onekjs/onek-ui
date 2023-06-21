import path from 'path';
import fs from 'fs';
import glob from 'glob';
import { iconsPath, runBuild } from './utils';
import { build } from 'vite';

const iconsSpritesName = 'icons-sprites';

interface Icon {
  name: string;
  componentName: string;
  path: string;
}

function getSVGData(): Icon[] {
  const data: Icon[] = [];
  const files = glob.sync(`svg/*.svg`, {
    cwd: iconsPath,
    absolute: true
  });
  for (const filePath of files) {
    const name = `icon-${path.basename(filePath, '.svg')}`;
    data.push({
      name,
      componentName: name,
      path: filePath
    });
  }
  return data;
}

function compilerIconSprites(data: Icon[]) {
  let symbol_str = '';
  for (let i = 0; i < data.length; i++) {
    const svgFile = fs.readFileSync(data[i].path, 'utf8');
    const pathRegex = /<path[^>]*>/;
    let svgPath = svgFile.match(pathRegex)![0];
    svgPath = svgPath.replace(/fill="#[a-zA-Z0-9]+"/g, '');
    const symbol = `<symbol id="${data[i].name}"  viewBox="0 0 1024 1024">${svgPath}</symbol>`;
    symbol_str += symbol;
  }
  // const outputData = `const icons = '${symbol_str}';
  // export { icons }`;
  const outputData = `const iconSprites = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbol_str}</svg>';
  export { iconSprites }`;
  const spritesName = `${iconsPath}/${iconsSpritesName}.js`;
  fs.writeFileSync(spritesName, outputData);

  const loadStr = `
  import { iconSprites } from './${iconsSpritesName}';

  export const loadSprites = () => {
    const svg = document.createElement('div');
    svg.setAttribute('aria-hidden', 'true');
    svg.style = 'display: none';
    svg.innerHTML += iconSprites;
    const ref = document.body.firstChild;
    document.body.insertBefore(svg, ref);
  };
`;
  const loadName = `${iconsPath}/load.js`;
  fs.writeFileSync(loadName, loadStr);
}

function createComponent(data: Icon[]) {
  if (!fs.existsSync(`${iconsPath}/components`)) {
    fs.mkdirSync(`${iconsPath}/components`);
  }
  // 创建vue组件
  const iconTemplate = `
    <template>
      <div>test1</div>
    </teampate>
    <script lang="ts">
      export default {
        name: 'o-icon-up'
      };
    </script>
    <script lang='ts' setup>
    </script>
  `;
  const iconName = `${iconsPath}/components/icons.vue`;
  fs.writeFileSync(iconName, iconTemplate);
}

function createMain() {
  const iconTemplate = `
  import { loadSprites } from './load';
  const Ions = {
    install: (app, options) => {
      loadSprites();
    }
  };
  
  export default Ions;
  `;

  const iconName = `${iconsPath}/index.js`;
  fs.writeFileSync(iconName, iconTemplate.trim());
}

async function buildIcons() {
  const icons = getSVGData();
  compilerIconSprites(icons);
  createComponent(icons);
  createMain();
  runBuild('pnpm run build', iconsPath);
}
buildIcons();
