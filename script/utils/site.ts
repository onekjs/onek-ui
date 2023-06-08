import {
  copyFiles,
  createdComponentsJson,
  traverseDirectory,
  watchComponentReadme
} from './fs';
import { componentPath, siteComponentsPath } from './paths';

type IComponent = {
  name: string;
  path: string;
};

const components: Array<IComponent> = [];

export const createSite = () => {
  return new Promise((resolve) => {
    traverseDirectory(componentPath, components);

    copyFiles(components, siteComponentsPath);

    createdComponentsJson(components, siteComponentsPath);

    watchComponentReadme(componentPath, siteComponentsPath);

    resolve(true);
  });
};
