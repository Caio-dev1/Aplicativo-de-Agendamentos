import AgendamentoTitulo from "./AgendamentoTitulo";
import UsuarioPerfil from "../../img/UsuarioPerfil.png";
import { useNavigate } from "react-router-dom";
import AgendamentoPesquisa from "./AgendamentoPesquisa";
import Sino from "../../img/Sino.png";
import Eng from "../../img/Eng.png";
import Chat from "../../img/Chat.png";
import * as S from "./StyledElements";

function Barratopo({ setTermoBusca }) {
  const navegar = useNavigate();
  return (
    <S.TopoBarraSecao>
      <AgendamentoTitulo />
      <AgendamentoPesquisa setTermoBusca={setTermoBusca} />
      <S.FerramentasContainer>
        <S.IconesContainer>
          <S.Icone src={Chat} />
          <S.Icone src={Sino} />
          <S.Icone src={Eng} />
        </S.IconesContainer>
        <S.PerfilWrapper>
          <S.PerfilImage
            onClick={() => navegar("/", { replace: true })}
            src={UsuarioPerfil}
            alt="Foto de Perfil de Usuário"
          />
        </S.PerfilWrapper>
      </S.FerramentasContainer>
    </S.TopoBarraSecao>
  );
}

export default Barratopo;
