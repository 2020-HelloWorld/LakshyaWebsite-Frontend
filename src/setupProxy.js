const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://663c-2401-4900-6196-e6b2-1d9c-7003-35b8-6eeb.ngrok-free.app',
      changeOrigin: true,
    })
  );
};
