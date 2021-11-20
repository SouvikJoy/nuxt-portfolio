/* =========================================================================================
 File Name: pwa.js
 Description: Nuxt PWA configuration
 ========================================================================================== */
module.exports = {
  meta: {
    mobileApp: true,
    mobileAppIOS: true,
    nativeUI: true,
    ogHost: process.env.APP_HOST,
    viewport: 'width=device-width, initial-scale=1, minimum-scale=1'
  },
  /* Workbox Module */
  workbox: {
    cacheNames: {
      prefix: 'debugger',
      suffix: 'v1'
    },
    offlineAnalytics: true,
    publicPath: '/_debugger',
    runtimeCaching: [
      {
        urlPattern: `${process.env.DEBUGGER}.*`
      },
      {
        urlPattern: `${process.env.PUBLIC_CDN}/_debugger/.*`,
        strategyOptions: {
          cacheName: 'debugger-optimized-image-cache',
          cacheExpiration: {
            maxAgeSeconds: 7 * 24 * 60 * 60
          }
        }
      },
      {
        urlPattern: `${process.env.PUBLIC_CDN}/assets/.*`,
        strategyOptions: {
          cacheName: 'debugger-assets-cache',
          cacheExpiration: {
            maxEntries: 20,
            maxAgeSeconds: 365 * 24 * 60 * 60
          }
        }
      },
      {
        urlPattern: '/_ipx/.*',
        strategyOptions: {
          cacheName: 'debugger-ipx-cache',
          cacheExpiration: {
            maxEntries: 20,
            maxAgeSeconds: 365 * 24 * 60 * 60
          }
        }
      }
    ]
  }
};
