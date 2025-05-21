import './App.css';
import { useEffect, useState } from 'react';
import Agendamentos from './componentes/Agendamentos/agendamento';

function App() {
  const [agendamentos, setAgendamentos] = useState([])


  useEffect(() => {
    fetch("api/agendamentos")
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
