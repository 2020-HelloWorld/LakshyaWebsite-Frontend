const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://f029-2401-4900-330c-a395-ccc6-2e96-14a6-3aec.ngrok-free.app',
      changeOrigin: true,
    })
  );
};
