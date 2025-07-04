import styled from "styled-components";
import CalendarioTable from "./CalendarioTable";
import CalendarioPopup from "./CalendarioPopup";
import { useState } from "react";

const CalendarioBox = styled.section`
font-family: Poppins;
`

function Calendario({ agendamentos, setDiaSelecionado, diaSelecionado }) {
    const [popup, setPopup] = useState(false);
    return ( 
    <>
        <CalendarioBox>
            <CalendarioTable setPopup={setPopup} agendamentos={agendamentos} diaSelecionado={diaSelecionado} setDiaSelecionado={setDiaSelecionado}/>
        </CalendarioBox>
        {popup && <CalendarioPopup setPopup={setPopup}/>}
    </>
    );
}

export default Calendario;