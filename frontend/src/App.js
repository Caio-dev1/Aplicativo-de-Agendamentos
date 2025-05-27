import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import ListaAgendamentos from "./componentes/ListagemAgendamentos/ListaAgendamento";
import PixeonMenu from "./componentes/PixeonSideBar/PixeonMenu";
import Barratopo from "./componentes/PixeonTopBar/BarraTopo";
import ContagemListagem from "./componentes/PixeonMainAgendamento/Contagem";

const AppWrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 22rem;
  background-color: #ffffff;
`;

const MainContent = styled.div`
  flex: 1;
  background-color: #fafafa;
  min-height: 100vh;
`;

const TopBar = styled.div`
  background-color: #ffffff;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

const PageBody = styled.div`
  padding: 0 1.8rem;
`;

function App() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/agendamentos`)
      .then((res) => res.json())
      .then((data) => setAgendamentos(data))
      .catch((err) =>
        alert("Alguma coisa deu errado ao tentar acessar o banco de dados", err)
      );
  }, []);

  return (
    <AppWrapper>
      <Sidebar>
        <PixeonMenu />
      </Sidebar>
      <MainContent>
        <TopBar>
          <Barratopo />
        </TopBar>
        <PageBody>
          <ContagemListagem agendamentos={agendamentos} />
          <ListaAgendamentos agendamentos={agendamentos} />
        </PageBody>
      </MainContent>
    </AppWrapper>
  );
}

export default App;
