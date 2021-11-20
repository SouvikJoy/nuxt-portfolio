module.exports = {
  presets: [
    [
      '@nuxt/babel-preset-app',
      {
        corejs: {
          version: 3
        }
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }]
  ]
};
