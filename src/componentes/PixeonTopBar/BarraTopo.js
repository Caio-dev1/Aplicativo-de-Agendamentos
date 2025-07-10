import AgendamentoTitulo from "./AgendamentoTitulo";
import styled from "styled-components";
import UsuarioPerfil from "../../img/UsuarioPerfil.png";
import { useNavigate } from "react-router-dom";
import AgendamentoPesquisa from "./AgendamentoPesquisa";
import Sino from "../../img/Sino.png";
import Eng from "../../img/Eng.png";
import Chat from "../../img/Chat.png";

const TopoBarraSecao = styled.section`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  justify-content: space-between;
`;
const PerfilWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #4CBC9A;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
const PerfilImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const IconesContainer = styled.div`
 display: flex;
 gap: 32px;
`
const Icone = styled.img`
 height: 32px;
`
const FerramentasContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 32px;
`
function Barratopo({ setTermoBusca }) {
  const navegar = useNavigate()
  return (
    <TopoBarraSecao>
      <AgendamentoTitulo />
      <AgendamentoPesquisa setTermoBusca={setTermoBusca} />
        <FerramentasContainer>
          <IconesContainer>
            <Icone src={Chat} />
            <Icone src={Sino} />
            <Icone src={Eng} />
          </IconesContainer>
          <PerfilWrapper>
            <PerfilImage onClick={() => navegar("/", { replace: true })} src={UsuarioPerfil} alt="Foto de Perfil de Usuário" />
          </PerfilWrapper>
        </FerramentasContainer>
    </TopoBarraSecao>
  );
}

export default Barratopo;

