import styled from "styled-components";
import ItemAgendamento from "./ItemAgendamento";
import ListaAgendamentoTitulo from "./ListaAgendamentoTitulo";
import SetaConcluido from "../../img/SetaConcluido.png";
import SetaAndamento from "../../img/SetaAndamento.png";
import SetaExpirado from "../../img/SetaExpirado.png";
import moment from "moment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 1rem;
`;

const AgendamentosLista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AgendamentoLi = styled.li``;

function ListaAgendamentos({ agendamentos, diaSelecionado }) {
    const agendamentosFiltrados = diaSelecionado
    ? agendamentos.filter((a) =>
        moment(a.Data).isSame(diaSelecionado, "day")
      )
    : agendamentos;

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
      <Container>
        <ListaAgendamentoTitulo />
        <AgendamentosLista>
          {agendamentosRenderizados.map((item) => (
            <AgendamentoLi key={item.id}>
              <ItemAgendamento
                item={item}
                seta={handleStatusSeta(item.Status)}
                corBase={handleStatusAgendamento(item.Status)}
              />
            </AgendamentoLi>
          ))}
        </AgendamentosLista>
      </Container>
    </>
  );
}

export default ListaAgendamentos;
