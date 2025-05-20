import './App.css';
import { useEffect, useState } from 'react';
import Agendamentos from './componentes/Agendamentos/agendamento';

  const jsonServer = require('json-server');
  const server = jsonServer.create();
  const router = jsonServer.router('db.json');
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);
  server.listen(3000, () => {
    console.log('JSON Server is running')
  });

function App() {
  const [agendamentos, setAgendamentos] = useState([])


  useEffect(() => {
    fetch("http://localhost:3001/agendamentos")
    .then((res) => res.json())
    .then((data) => setAgendamentos(data))
    .catch((err) => alert("Alguma coisa deu errado ao tenta acessar o banco de dados", err))
  }, [])
  
  return (
    <div>
      <Agendamentos agendamentos={agendamentos}/>
    </div>
  );
}

export default App;
