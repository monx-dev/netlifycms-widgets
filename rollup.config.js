import configRollbar from '@monx/rollup-config';
import { dependencies, peerDependencies } from './package.json';

export default configRollbar({
  input: ['src/ColorWidget.tsx', 'src/TinyMCEWidget.tsx', 'src/index.ts'],
  dependencies,
  peerDependencies,
});
