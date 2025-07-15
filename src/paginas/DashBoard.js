import "../App.css";
import ListaAgendamentos from "../componentes/ListagemAgendamentos/ListaAgendamento";
import PixeonMenu from "../componentes/PixeonSideBar/PixeonMenu";
import Barratopo from "../componentes/PixeonTopBar/BarraTopo";
import ContagemListagem from "../componentes/ContagemAgendamento/Contagem";
import Calendario from "../componentes/Calendario/Calendario";
import MonitoramentoDisco from "../componentes/MonitoramentoDisco/Monitoramento";
import CalendarioTitulo from "../componentes/Calendario/CalendarioTitulo";
import { useAgendamento } from "../componentes/Contexts/AgendamentoContext";
import * as S from "./StyledElements";

function Dashboard() {
  const {
    agendamentos,
    setDiaSelecionado,
    diaSelecionado,
    termoBusca,
    setTermoBusca,
  } = useAgendamento();

  return (
    <S.AppWrapper>
      <S.Sidebar>
        <PixeonMenu />
      </S.Sidebar>
      <S.MainContent>
        <S.TopBar>
          <Barratopo setTermoBusca={setTermoBusca} />
        </S.TopBar>
        <S.PageBody>
          <S.ContentRow>
            <S.LeftColumn>
              <ContagemListagem agendamentos={agendamentos} />
              <ListaAgendamentos
                agendamentos={agendamentos}
                diaSelecionado={diaSelecionado}
                termoBusca={termoBusca}
              />
            </S.LeftColumn>
            <S.ContainerBox>
              <CalendarioTitulo Titulo="Calendario" />
              <S.RightColumn>
                <Calendario
                  agendamentos={agendamentos}
                  diaSelecionado={diaSelecionado}
                  setDiaSelecionado={setDiaSelecionado}
                />
                <MonitoramentoDisco />
              </S.RightColumn>
            </S.ContainerBox>
          </S.ContentRow>
        </S.PageBody>
      </S.MainContent>
    </S.AppWrapper>
  );
}

export default Dashboard;
