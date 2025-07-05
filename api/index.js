const jsonServer = require('json-server');
const path = require('path');

const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

module.exports = (req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/agendamentos')) {
    const db = router.db.getState();
    const agendamentos = db.agendamentos || [];
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(agendamentos));
  } else {
    res.status(404).send('Not Found');
  }
};
