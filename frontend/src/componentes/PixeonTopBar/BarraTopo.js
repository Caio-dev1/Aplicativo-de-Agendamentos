import AgendamentoTitulo from "./AgendamentoTitulo";
import styled from "styled-components";

const TopoBarraSecao = styled.section`
  background-color: #ffffff;
`;

function Barratopo() {
  return (
    <TopoBarraSecao>
      <AgendamentoTitulo />
    </TopoBarraSecao>
  );
}

export default Barratopo;
