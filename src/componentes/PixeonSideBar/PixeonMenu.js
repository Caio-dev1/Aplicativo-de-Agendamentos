import PixeonLogo from "../../img/PixeonLogo.png";
import Calendario from "../../img/Calendario.png";
import Atividade from "../../img/Atividade.png";
import * as S from "./StyledElements";

function PixeonMenu() {
  return (
    <S.BannerEstilizado>
      <S.ContainerBanner>
        <S.Logo src={PixeonLogo} alt="Logo da Pixeon" />
      </S.ContainerBanner>
      <S.AgendamentoMenu>
        <S.AgendamentoMenuButtonAtivado>
          <S.MenuIcone src={Calendario} alt="Imagem de Calendário" />
          Agendamento
        </S.AgendamentoMenuButtonAtivado>
        <S.AgendamentoMenuButton>
          <S.MenuIcone src={Atividade} alt="Imagem de Batimento Cardiáco" />
          Todos os Agendamentos
        </S.AgendamentoMenuButton>
      </S.AgendamentoMenu>
    </S.BannerEstilizado>
  );
}

export default PixeonMenu;
