import styled from "styled-components";
import CalendarioTitulo from "./CalendarioTitulo";
import CalendarioTable from "./CalendarioTable";

const CalendarioBox = styled.section`
width: 722px;
height: 404px;
background-color: #FFFFFF;
`

function Calendario() {
    return ( 
    <>
        <CalendarioTitulo Titulo="Calendario"/>
        <CalendarioBox>
            <CalendarioTable/>
        </CalendarioBox>
    </>
    );
}

export default Calendario;