import styled from "styled-components";
import CalendarioTitulo from "./CalendarioTitulo";
import CalendarioTable from "./CalendarioTable";

const CalendarioBox = styled.section`
width: 722px;
height: 404px;
background-color: #FFFFFF;
`

function Calendario({ agendamentos, setDiaSelecionado, diaSelecionado }) {
    return ( 
    <>
        <CalendarioTitulo Titulo="Calendario"/>
        <CalendarioBox>
            <CalendarioTable agendamentos={agendamentos} diaSelecionado={diaSelecionado} setDiaSelecionado={setDiaSelecionado}/>
        </CalendarioBox>
    </>
    );
}

export default Calendario;