import { useState } from "react";
import CalendarioTable from "./CalendarioTable";
import Popup from "../Popup";
import * as S from "./StyledElements";

function Calendario({ agendamentos, setDiaSelecionado, diaSelecionado }) {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <S.CalendarioBox>
        <CalendarioTable
          setPopup={setPopup}
          agendamentos={agendamentos}
          diaSelecionado={diaSelecionado}
          setDiaSelecionado={setDiaSelecionado}
        />
      </S.CalendarioBox>
      {popup && (
        <Popup
          onClose={() => setPopup(false)}
          TextoBase={"Não existem agendamentos para o dia selecionado."}
        />
      )}
    </>
  );
}

export default Calendario;
