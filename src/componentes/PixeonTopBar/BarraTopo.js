import AgendamentoTitulo from "./AgendamentoTitulo";
import styled from "styled-components";
import UsuarioPerfil from "../../img/UsuarioPerfil.png";
import { useNavigate } from "react-router-dom";
import AgendamentoPesquisa from "./AgendamentoPesquisa";

const TopoBarraSecao = styled.section`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
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

function Barratopo() {
  const navegar = useNavigate()
  return (
    <TopoBarraSecao>
      <AgendamentoTitulo />
      <AgendamentoPesquisa />
      <PerfilWrapper>
        <PerfilImage onClick={() => navegar("/", { replace: true })} src={UsuarioPerfil} alt="Foto de Perfil de Usuário" />
      </PerfilWrapper>
    </TopoBarraSecao>
  );
}

export default Barratopo;

