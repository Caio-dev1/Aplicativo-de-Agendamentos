const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  console.log('Request:', req.method, req.url);
  next();
});

server.use(router);

module.exports = (req, res) => {
  server(req, res);
};
