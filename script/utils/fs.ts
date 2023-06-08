import fs from 'fs';
import path from 'path';
import { resolve } from 'path';
import { pkgPath } from './paths';
//保留的文件
const stayFile = ['package.json', 'README.md'];

export type IComponent = {
  name: string;
  path: string;
};

export const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      const curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path != `${pkgPath}/onekui`) fs.rmdirSync(path);
  }
};

export const traverseDirectory = (
  dir: string,
  components: Array<IComponent>
) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath, components);
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
};

export const createdComponentsJson = (
  list: Array<IComponent>,
  destinationPath: string
) => {
  const data = list.map((item) => {
    return {
      text: item.name,
      link: `/components/${item.name}/`
    };
  });

  fs.writeFile(`${destinationPath}/index.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
  });
};

export const copyFiles = (
  sourcePathList: Array<IComponent>,
  destinationPath: string
) => {
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath);
  }
  sourcePathList.forEach((element) => {
    const destDirPath = `${destinationPath}/${element.name}`;
    copyFile(element.path, destDirPath);
  });
};

export const copyFile = (sourcePath: string, destDirPath: string) => {
  // 检查目标目录是否存在，如果不存在则创建目录
  if (!fs.existsSync(destDirPath)) {
    fs.mkdirSync(destDirPath);
  }
  const sourceStream = fs.createReadStream(sourcePath);
  const destinationStream = fs.createWriteStream(
    path.join(destDirPath, path.basename('index.md'))
  );
  sourceStream.pipe(destinationStream);
};

export const watchComponentReadme = (
  directoryPath: string,
  siteComponentsPath: string
) => {
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
          watchComponentReadme(filePath, siteComponentsPath);
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
};
