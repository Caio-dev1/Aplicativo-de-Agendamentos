import styled from "styled-components";
import CalendarioTitulo from "./CalendarioTitulo";

const CalendarioBox = styled.section`
width: 722px;
height: 404px;
background-color: #FFFFFF;
`

function Calendario() {
    return ( 
    <>
        <CalendarioTitulo/>
        <CalendarioBox>

        </CalendarioBox>
    </>
    );
}

export default Calendario;