/* =========================================================================================
 File Name: render.js
 Description: Nuxt Render configuration
 ========================================================================================== */
const BASE_HOST = process.env.APP_HOST;
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  crossorigin: 'anonymous',
  http2: isDev
    ? false
    : {
        push: true,
        pushAssets: (req, res, publicPath, preloadFiles) =>
          preloadFiles
            .filter(f => f.asType === 'script' && f.file === 'runtime.js')
            .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
      },
  csp: {
    hashAlgorithm: 'sha256',
    policies: {
      'default-src': ["'self'", 'https'],
      'worker-src': ["'self'", 'blob:', 'https:', `cdn.${BASE_HOST}`],
      'font-src': ["'self'", 'data:', 'https:', `*.${BASE_HOST}`, 'fonts.gstatic.com'],
      'img-src': ["'self'", 'data:', 'https:', `*.${BASE_HOST}`],
      'manifest-src': ["'self'", 'https:', `*.${BASE_HOST}`],
      'style-src': ["'self'", 'https:', "'unsafe-inline'", `*.${BASE_HOST}`, 'fonts.googleapis.com'],
      'connect-src': ["'self'", 'https:', `*.${BASE_HOST}`],
      'form-action': ["'self'"],
      'frame-ancestors': ["'none'"],
      'object-src': ["'none'"],
      'base-uri': [`https://${BASE_HOST}`]
      // 'upgrade-insecure-requests': []
    }
    // addMeta: true
  }
};
