/* =========================================================================================
 File Name: build.js
 Description: Nuxt Build configuration
 ========================================================================================== */
module.exports = {
  corejs: 3,

  babel: {
    presets ({ isServer }, [preset, options]) {
      return [
        [
          preset,
          {
            corejs: { version: 3 },
            ...options
          }
        ]
      ];
    },
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  },

  terser: {
    terserOptions: {
      format: {
        comments: false,
        safari10: true,
        webkit: true
      },
      output: {
        comments: false
      },
      safari10: true
    },
    extractComments: false
  }
};
