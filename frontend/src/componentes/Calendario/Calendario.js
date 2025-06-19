import styled from "styled-components";
import CalendarioTitulo from "./CalendarioTitulo";
import CalendarioTable from "./CalendarioTable";
import CalendarioPopup from "./CalendarioPopup";
import { useState } from "react";

const CalendarioBox = styled.section`
width: 722px;
height: 404px;
background-color: #FFFFFF;
font-family: Poppins;
`

function Calendario({ agendamentos, setDiaSelecionado, diaSelecionado }) {
    const [popup, setPopup] = useState(false);
    return ( 
    <>
        <CalendarioTitulo Titulo="Calendario"/>
        <CalendarioBox>
            <CalendarioTable setPopup={setPopup} agendamentos={agendamentos} diaSelecionado={diaSelecionado} setDiaSelecionado={setDiaSelecionado}/>
        </CalendarioBox>
        {popup && <CalendarioPopup setPopup={setPopup}/>}
    </>
    );
}

export default Calendario;