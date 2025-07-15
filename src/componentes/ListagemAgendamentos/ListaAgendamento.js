import ItemAgendamento from "./ItemAgendamento";
import ListaAgendamentoTitulo from "./ListaAgendamentoTitulo";
import SetaConcluido from "../../img/SetaConcluido.png";
import SetaAndamento from "../../img/SetaAndamento.png";
import SetaExpirado from "../../img/SetaExpirado.png";
import moment from "moment";
import Popup from "../Popup";
import { useEffect, useState } from "react";
import * as S from "./StyledElements";

function ListaAgendamentos({ agendamentos, diaSelecionado, termoBusca }) {
  const [popupLista, setPopupLista] = useState(false);
  const agendamentosFiltrados = agendamentos
    .filter((a) =>
      diaSelecionado ? moment(a.Data).isSame(diaSelecionado, "day") : true
    )
    .filter((a) =>
      termoBusca
        ? a.Nome?.toLowerCase().includes(termoBusca.toLowerCase())
        : true
    );

  useEffect(() => {
    if (agendamentosFiltrados.length === 0) {
      setPopupLista(true);
    } else {
      setPopupLista(false);
    }
  }, [agendamentosFiltrados]);

  const agendamentosRenderizados = agendamentosFiltrados.slice(0, 5);

  function handleStatusAgendamento(status) {
    switch (status) {
      case "C":
        return "#4CBC9A";
      case "A":
        return "#FEC64F";
      case "E":
        return "#FC6B57";
      default:
        return "#CCCCCC";
    }
  }

  function handleStatusSeta(status) {
    switch (status) {
      case "C":
        return SetaConcluido;
      case "A":
        return SetaAndamento;
      case "E":
        return SetaExpirado;
      default:
        return "";
    }
  }

  return (
    <>
      <S.Container>
        <ListaAgendamentoTitulo />
        <S.AgendamentosLista>
          {agendamentosRenderizados.map((item) => (
            <S.AgendamentoLi key={item.id}>
              <ItemAgendamento
                item={item}
                seta={handleStatusSeta(item.Status)}
                corBase={handleStatusAgendamento(item.Status)}
              />
            </S.AgendamentoLi>
          ))}
        </S.AgendamentosLista>
        {popupLista && (
          <Popup
            onClose={() => setPopupLista(false)}
            TextoBase={"Sem agendamentos para o filtro aplicado"}
          />
        )}
      </S.Container>
    </>
  );
}

export default ListaAgendamentos;
