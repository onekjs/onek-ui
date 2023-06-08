import { createServer } from 'vitepress';
import { createLogger } from 'vite';
import chalk from 'chalk';
import {
  componentPath,
  siteComponentsPath,
  traverseDirectory,
  createdComponentsJson,
  copyFiles,
  watchComponentReade
} from '../utils';

type IComponent = {
  name: string;
  path: string;
};

const components: Array<IComponent> = [];

function createdComponentReadme() {
  traverseDirectory(componentPath, components);

  copyFiles(components, siteComponentsPath);

  createdComponentsJson(components, siteComponentsPath);
}

const logger = createLogger('info', {
  prefix: 'seed'
});

async function devDocs() {
  const server = await createServer('./site/docs', {
    host: true,
    port: 3080
  });

  await server.listen();

  server.watcher.on('ready', () => {
    logger.info(`\nServer is ready. Copy docs... \n`);
    logger.info(`${chalk.green.bold('http://localhost:3080/')} \n`);
  });
}

createdComponentReadme();
watchComponentReade(componentPath, siteComponentsPath);
devDocs();
