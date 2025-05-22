import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Agendamentos from './componentes/Agendamentos/agendamento';

const API_BASE = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [agendamentos, setAgendamentos] = useState([])


  useEffect(() => {
    fetch(`${API_BASE}/agendamentos`)
    .then((res) => res.json())
    .then((data) => setAgendamentos(data))
    .catch((err) => alert("Alguma coisa deu errado ao tentar acessar o banco de dados", err))
  }, [])
  
  return (
    <div>
      <Agendamentos agendamentos={agendamentos}/>
    </div>
  );
}

export default App;
