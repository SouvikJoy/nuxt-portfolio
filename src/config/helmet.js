/* =========================================================================================
 File Name: helmet.js
 Description: Nuxt Helmet configuration
 ========================================================================================== */
module.exports = {
  contentSecurityPolicy: false,
  dnsPrefetchControl: {
    allow: true
  },
  expectCt: {
    maxAge: 86400
  },
  frameguard: {
    action: 'sameorigin'
  },
  hsts:
    process.env.NODE_ENV !== 'production'
      ? false
      : {
          maxAge: 15552000,
          includeSubDomains: true,
          preload: true
        },
  permittedCrossDomainPolicies: {
    permittedPolicies: 'none'
  },
  referrerPolicy: {
    policy: 'no-referrer'
  }
};
