/* =========================================================================================
 File Name: axios.js
 Description: Nuxt Axios configuration
 ========================================================================================== */
module.exports = {
  credentials: true,
  // baseURL: process.env.API_URL,
  debug: process.env.NODE_ENV !== 'production',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
    }
  },
  prefix: '/api/',
  proxy: true
};
