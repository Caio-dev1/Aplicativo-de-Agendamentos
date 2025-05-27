import styled from "styled-components";

const CardContagemAgendamento = styled.div`
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

const PorcetagemBola = styled.div`
  background-color: ${({ corBase }) => `${corBase}1A`};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PorcentagemTexto = styled.div`
  color: #374557;
  font-family: Poppins;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
`;

const CardContagemTexto = styled.div`
  color: #374557;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
`;

const BarraProgesso = styled.img``;

const SetaIcone = styled.img`
  height: 12px;
  margin-left: 2rem;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function ContagemCard({ corBase, porcentagem, titulo, imagemSeta, imagemBarra }) {
  return (
    <CardContagemAgendamento>
      <PorcetagemBola corBase={corBase}>
        <PorcentagemTexto>{porcentagem}%</PorcentagemTexto>
      </PorcetagemBola>
      <ContainerCard>
        <CardContagemTexto>{titulo}</CardContagemTexto>
        <BarraProgesso src={imagemBarra} alt="Barra de Progresso" />
      </ContainerCard>
      <SetaIcone src={imagemSeta} alt="Seta Apontando para Direita" />
    </CardContagemAgendamento>
  );
}

export default ContagemCard;
