import { pkgPath, runBuild } from '../utils';
import { series } from 'gulp';
export const publishComponent = async () => {
  runBuild('release-it', `${pkgPath}/onekjs-ui`);
};
export default series(async () => publishComponent());
