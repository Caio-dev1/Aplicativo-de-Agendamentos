import styled from "styled-components";
import "../App.css";
import { useEffect, useState } from "react";
import ListaAgendamentos from "../componentes/ListagemAgendamentos/ListaAgendamento";
import PixeonMenu from "../componentes/PixeonSideBar/PixeonMenu";
import Barratopo from "../componentes/PixeonTopBar/BarraTopo";
import ContagemListagem from "../componentes/ContagemAgendamento/Contagem";
import Calendario from "../componentes/Calendario/Calendario";
import MonitoramentoDisco from "../componentes/MonitoramentoDisco/Monitoramento";
import CalendarioTitulo from "../componentes/Calendario/CalendarioTitulo";

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

const ContentRow = styled.div`
  display: flex;
  gap: 2rem;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
    word-break: keep-all;
  overflow-wrap: normal;
`;
const RightColumn = styled.div`
 display: flex;
 background-color: #FFFFFF;
 width: 722px;
height: 404px;
`;

const ContainerBox = styled.div`
 display: flex;
 flex-direction: column;
`

function Dashboard() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [diaSelecionado, setDiaSelecionado] = useState(null);

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
          <ContentRow>
            <LeftColumn>
              <ContagemListagem agendamentos={agendamentos} />
              <ListaAgendamentos agendamentos={agendamentos} diaSelecionado={diaSelecionado}/>
            </LeftColumn>
            <ContainerBox>
              <CalendarioTitulo Titulo="Calendario"/>
              <RightColumn>
                <Calendario agendamentos={agendamentos} diaSelecionado={diaSelecionado} setDiaSelecionado={setDiaSelecionado}/>
                <MonitoramentoDisco/>
              </RightColumn>
            </ContainerBox>
          </ContentRow>
        </PageBody>
      </MainContent>
    </AppWrapper>
  );
}

export default Dashboard;
