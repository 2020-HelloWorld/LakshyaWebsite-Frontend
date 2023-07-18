const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
        target: 'https://a426-2409-408c-9194-cad3-44f2-432d-bbd3-4719.ngrok-free.app', //have to use env :(
        changeOrigin: true
        })
    );
    };