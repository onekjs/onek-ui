import path from 'path';
import fs from 'fs';
import glob from 'glob';
import { iconsPath, runBuild } from './utils';

const iconsSpritesName = 'icons-sprites';

const iconsComponentPath = `${iconsPath}/src/components`;

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

function generateComponent(data: Icon[]) {
  if (!fs.existsSync(iconsComponentPath)) {
    fs.mkdirSync(iconsComponentPath);
  }
  let exports = ``;
  const icons_list = [];
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
    const iconName = `${iconsComponentPath}/${data[i].name}.vue`;
    fs.writeFileSync(iconName, iconTemplate);

    const iconIndexName = `${iconsComponentPath}/${data[i].name}.js`;
    const words = data[i].componentName.split('_');
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const exportName = capitalizedWords.join('');
    const iconIndex = `import ${exportName} from './${data[i].name}.vue';
${exportName}.install = (app, options) => {
  app.component(${exportName}.name, ${exportName});
};
export default ${exportName};
`;
    fs.writeFileSync(iconIndexName, iconIndex);

    exports += `export { default as ${exportName} } from './components/${data[i].name}.js';\n`;

    icons_list.push({
      name: `o-${data[i].name}`
    });
  }

  const iconJSON = `${iconsPath}/icon-list-json.json`;
  fs.writeFileSync(iconJSON, JSON.stringify(icons_list));

  const iconsName = `${iconsPath}/src/index.js`;
  fs.writeFileSync(iconsName, exports);
}

function generateIndex() {
  const index = `export { default as icon_list } from './icon-list-json.json';
import * as components from './src/index';
export * from './src/index';

export default {
  install: (app) => {
    for (const name in components) {
      app.use(components[name]);
    }
  }
};
`;
  const iconName = `${iconsPath}/index.js`;
  fs.writeFileSync(iconName, index);
}

async function buildIcons() {
  const icons = getSVGData();
  // compilerIconSprites(icons);
  generateComponent(icons);
  generateIndex();
  runBuild('pnpm run build', iconsPath);
}
buildIcons();
