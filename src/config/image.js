module.exports = {
  cloudinary: {
    baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`
  },
  screens: {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
    '2xl': 1536
  },
  dir: 'favicon.ico',
  staticFilename: ['~/static/logo.png', '~/static/icon.png', '~/static/favicon-192x192.ico'],
  domains: [
    'images.unsplash.com'
  ],
  alias: {
    unsplash: 'https://images.unsplash.com'
  }
};
