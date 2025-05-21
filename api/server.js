
const jsonServer = require('json-server');
const path = require('path');


const app = jsonServer.create();

const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`JSON Server rodando em http://localhost:${PORT}`);
});
