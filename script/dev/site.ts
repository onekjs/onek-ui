import fs from 'fs';
import path from 'path';
import { componentPath, siteComponentsPath } from '../utils';

type IComponent = {
  name: string;
  path: string;
};

const components: Array<IComponent> = [];

function copyFile(sourcePathList: Array<IComponent>, destinationPath: string) {
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath);
  }
  sourcePathList.forEach((element) => {
    const destDirPath = `${destinationPath}/${element.name}`;
    // 检查目标目录是否存在，如果不存在则创建目录
    if (!fs.existsSync(destDirPath)) {
      fs.mkdirSync(destDirPath);
    }

    const sourceStream = fs.createReadStream(element.path);
    const destinationStream = fs.createWriteStream(
      path.join(destDirPath, path.basename('index.md'))
    );
    sourceStream.pipe(destinationStream);
  });
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
// 遍历组件md
traverseDirectory(componentPath);
// 复制文件
copyFile(components, siteComponentsPath);
// 生成components文件
createdComponentsJson(components, siteComponentsPath);
console.log('文档迁移成功');
