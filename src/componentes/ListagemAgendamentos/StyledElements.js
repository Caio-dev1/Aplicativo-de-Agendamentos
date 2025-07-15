import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 1rem;
`;

export const AgendamentosLista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AgendamentoLi = styled.li``;

export const CabecalhoSecao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const TituloAgendamento = styled.h3`
  font-family: Poppins;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #374557;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BotaoVerTodos = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const VerTodosTexto = styled.p`
  color: #4CBC9A;
  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Seta = styled.img`
  height: 12px;
  margin-top: 1px;
`;

export const AgendamentoItem = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  width: 722px;
  height: 96px;
  border-radius: 16px;
`;

export const SetaContainer = styled.div`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Icone = styled.img`
  height: 16px;
  width: 16px;
`;

export const ItemTexto = styled.p`
  color: #a098ae;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;
`;

export const ItemTitulo = styled.h3`
  font-family: Poppins;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #374557;
  margin: 0;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  flex: 1;
  gap: 0.5rem;
  white-space: nowrap;
`;

export const LinhaSuperior = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DataEHora = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ItemDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: #dbdbdb;
`;

export const LinhaInferior = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DataOuHora = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const BarraLateral = styled.div`
  width: 16px;
  height: 96px;
  background-color: ${(props) => props.corBase};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;
