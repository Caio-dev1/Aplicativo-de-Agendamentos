import styled from "styled-components";

export const ContagemAgendamentos = styled.section`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerAgendamentosCards = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CardContagemAgendamento = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  width: 353px;
  height: 127px;
  border-radius: 16px;
  box-sizing: border-box;
`;

export const PorcetagemBola = styled.div`
  background-color: ${({ corBase }) => `${corBase}1A`};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PorcentagemTexto = styled.div`
  color: #374557;
  font-family: Poppins;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
`;

export const CardContagemTexto = styled.div`
  color: #374557;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
`;

export const BarraProgesso = styled.img``;

export const SetaIcone = styled.img`
  height: 12px;
  margin-left: 2rem;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TituloContagem = styled.h3`
  font-family: Poppins;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #374557;
`;
