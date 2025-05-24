import AgendamentoTitulo from "./AgendamentoTitulo";
import styled from "styled-components";

const TopoBarraSecao = styled.section`
background-color: #FFFFFF;
margin-bottom: 14.8rem;
`

function Barratopo() {
    return ( 
        <TopoBarraSecao>
            <AgendamentoTitulo/>
        </TopoBarraSecao>
    );
}

export default Barratopo;