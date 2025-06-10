import styled from "styled-components";
import SetaVerde from "../../img/SetaConcluido.png"

const CabecalhoSecao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5rem;
  width: 100%;
  flex-wrap: wrap;
`;

const TituloAgendamento = styled.h3`
  font-family: Poppins;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #374557;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BotaoVerTodos = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const VerTodosTexto = styled.p`
  color: #4CBC9A;
  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Seta = styled.img`
  height: 12px;
  margin-top: 1px;
`;
function CabecalhoAgendamentos() {
  return(
  <CabecalhoSecao>
    <TituloAgendamento>
      Listagem de Agendamentos
    </TituloAgendamento>
    <BotaoVerTodos>
      <VerTodosTexto>Visualizar Todos</VerTodosTexto>
      <Seta src={SetaVerde} alt="Seta verde Apontando para Direita >"/>
    </BotaoVerTodos>
  </CabecalhoSecao>
  ) 
}

export default CabecalhoAgendamentos;
