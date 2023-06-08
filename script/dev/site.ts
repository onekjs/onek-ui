import fs from 'fs';
import path from 'path';
import { createServer } from 'vitepress';
import { createLogger } from 'vite';
import { componentPath, siteComponentsPath } from '../utils';

type IComponent = {
  name: string;
  path: string;
};

const components: Array<IComponent> = [];

function copyFiles(sourcePathList: Array<IComponent>, destinationPath: string) {
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath);
  }
  sourcePathList.forEach((element) => {
    const destDirPath = `${destinationPath}/${element.name}`;
    copyFile(element.path, destDirPath);
  });
}

function copyFile(sourcePath: string, destDirPath: string) {
  // 检查目标目录是否存在，如果不存在则创建目录
  if (!fs.existsSync(destDirPath)) {
    fs.mkdirSync(destDirPath);
  }
  const sourceStream = fs.createReadStream(sourcePath);
  const destinationStream = fs.createWriteStream(
    path.join(destDirPath, path.basename('index.md'))
  );
  sourceStream.pipe(destinationStream);
}

function createdComponentsJson(
  list: Array<IComponent>,
  destinationPath: string
) {
  const data = list.map((item) => {
    return {
      text: item.name,
      link: `/components/${item.name}/`
    };
  });

  fs.writeFile(`${destinationPath}/index.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
  });
}

function traverseDirectory(dir: string) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath);
    } else {
      if (file === 'README.md') {
        const componentName = path.basename(path.parse(filePath).dir);
        components.push({
          name: componentName,
          path: path.relative(process.cwd(), filePath)
        });
      }
    }
  });
}

function createdComponentReadme() {
  // 遍历组件md
  traverseDirectory(componentPath);
  // 复制文件
  copyFiles(components, siteComponentsPath);
  // 生成components json文件
  createdComponentsJson(components, siteComponentsPath);
  console.log('文档迁移成功');
}

function watchComponentReade(directoryPath: string) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        if (stats.isDirectory()) {
          watchComponentReade(filePath);
        } else if (path.extname(filePath) === '.md') {
          fs.watchFile(filePath, () => {
            const componentName = path.basename(path.parse(filePath).dir);
            if (filePath) {
              copyFile(filePath, siteComponentsPath + '/' + componentName);
            }
          });
        }
      });
    });
  });
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
  });
}

createdComponentReadme();
watchComponentReade(componentPath);
devDocs();
