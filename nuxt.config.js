import {
  axios,
  build,
  buildModules,
  colorMode,
  css,
  head,
  helmet,
  image,
  modules,
  pwa,
  render,
  security,
  styleResources
} from './src/config';

export default {

  ssr: true,

  target: 'server',

  axios,

  build,

  helmet,

  buildModules,

  colorMode,

  modules,

  head,

  css,

  components: false,

  loading: {
    color: 'skyBlue',
    height: '5px',
    continuous: true
  },

  srcDir: './src',

  pwa,

  styleResources,

  render,

  telemetry: false,

  security,

  image
};
