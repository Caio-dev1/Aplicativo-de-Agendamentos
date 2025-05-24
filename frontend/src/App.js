import styled from 'styled-components';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import ListaAgendamentos from './componentes/ListagemAgendamentos/ListaAgendamento';
import PixeonMenu from './componentes/PixeonMenu/PixeonMenu';
import Barratopo from './componentes/PixeonBar/BarraTopo';
import Aba from './componentes/ABA';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;
`
const BodyWrapper = styled.div`
 display: flex;
 align-items: center;
 width: calc(100% - 22rem);
 height: 100%;
 margin-left: 22rem;
`
const MainContent = styled.div`
 background-color: #FAFAFA;
`
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
      <ListaAgendamentos agendamentos={agendamentos}/>
      <HeaderWrapper>
        <PixeonMenu/> 
        <Barratopo/>
      </HeaderWrapper>
      <MainContent>
        <BodyWrapper>
          <Aba/>
        </BodyWrapper>
      </MainContent>
    </div>
  );
}

export default App;
