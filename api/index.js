const path = require('path');
const jsonServer = require('json-server');
const fs = require('fs');

const localPath   = path.join(__dirname, 'db.json');       
const lambdaPath  = path.join(__dirname, 'api', 'db.json');
const dbPath      = fs.existsSync(localPath) ? localPath : lambdaPath;

const server      = jsonServer.create();
const router      = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => server(req, res);
