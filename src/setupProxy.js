const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://c2cf-2401-4900-6196-e6b2-d499-a37f-b5ce-ef0f.ngrok-free.app ',
      changeOrigin: true,
    })
  );
};
