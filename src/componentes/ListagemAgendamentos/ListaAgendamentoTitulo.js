import * as S from "./StyledElements";
import SetaVerde from "../../img/SetaConcluido.png";

function CabecalhoAgendamentos() {
  return (
    <S.CabecalhoSecao>
      <S.TituloAgendamento>Listagem de Agendamentos</S.TituloAgendamento>
      <S.BotaoVerTodos>
        <S.VerTodosTexto>Visualizar Todos</S.VerTodosTexto>
        <S.Seta src={SetaVerde} alt="Seta verde Apontando para Direita >" />
      </S.BotaoVerTodos>
    </S.CabecalhoSecao>
  );
}

export default CabecalhoAgendamentos;
