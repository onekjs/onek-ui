import { delPath } from './utils';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, webPath, runBuild } from './utils';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';

//删除onekjs-ui
export const removeDist = () => {
  return delPath(`${pkgPath}/onekjs-ui`);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);

//打包样式
export const buildStyle = () => {
  return src(`${webPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/onekjs-ui/lib/src`))
    .pipe(dest(`${pkgPath}/onekjs-ui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  runBuild('pnpm run build', webPath);
};
