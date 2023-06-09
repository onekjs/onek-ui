import { createServer } from 'vitepress';
import { createLogger } from 'vite';
import chalk from 'chalk';
import { createSite } from './create-site';

const logger = createLogger('info', {
  prefix: 'seed'
});

async function runDevSite() {
  await createSite();
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
runDevSite();
