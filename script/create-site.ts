import {
  copyFiles,
  createComponentsJson,
  traverseDirectory,
  watchComponentReadme,
  componentPath,
  siteComponentsPath
} from './utils';

type IComponent = {
  name: string;
  path: string;
};

const components: Array<IComponent> = [];

export const createSite = () => {
  traverseDirectory(componentPath, components);

  copyFiles(components, siteComponentsPath);

  createComponentsJson(components, siteComponentsPath);

  watchComponentReadme(componentPath, siteComponentsPath);
};
