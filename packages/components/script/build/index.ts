import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath, runBuild } from "../utils";
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';

//删除onekui
export const removeDist = () => {
  return delPath(`${pkgPath}/onekui`);
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
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/onekui/lib/src`))
    .pipe(dest(`${pkgPath}/onekui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  runBuild("pnpm run build", componentPath);
};