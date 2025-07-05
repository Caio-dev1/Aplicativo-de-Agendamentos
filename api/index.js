const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'api', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.use((req, res, next) => {
  console.log('Request:', req.method, req.url);
  next();
});

module.exports = (req, res) => server(req, res);
