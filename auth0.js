// auth0.js
import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: 'your-auth0-domain',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    cookieSecret: 'your-cookie-secret',
    cookieLifetime: 60 * 60 * 8, // 8 hours
    storeIdToken: true,
    storeAccessToken: true,
    storeRefreshToken: true,
  },
});
