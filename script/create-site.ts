import {
  copyFiles,
  createComponentsJson,
  traverseDirectory,
  watchComponentReadme,
  webPath,
  webSitePath
} from './utils';

type IComponent = {
  name: string;
  path: string;
};

const components: Array<IComponent> = [];

export const createSite = () => {
  traverseDirectory(webPath, components);

  copyFiles(components, webSitePath);

  createComponentsJson(components, webSitePath);

  watchComponentReadme(webPath, webSitePath);
};
