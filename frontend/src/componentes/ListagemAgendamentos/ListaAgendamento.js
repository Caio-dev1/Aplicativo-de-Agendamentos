import styled from "styled-components";
import ItemAgendamento from "./ItemAgendamento";
import ListaAgendamentoTitulo from "./ListaAgendamentoTitulo";

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

const AgendamentoLi = styled.li`
  
`;

function ListaAgendamentos({ agendamentos }) {
  const agendamentosRenderizados = agendamentos.filter(a => a.id <= 5);

  return (
  <>
    <Container>
      <ListaAgendamentoTitulo />
      <AgendamentosLista>
        {agendamentosRenderizados.map(item => (
          <AgendamentoLi key={item.id}>
            <ItemAgendamento item={item} />
          </AgendamentoLi>
        ))}
      </AgendamentosLista>
    </Container>
  </>
  );
}

export default ListaAgendamentos;
