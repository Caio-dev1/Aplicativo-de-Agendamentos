import styled from "styled-components";
import Relogio from "../../img/Relogio.png";
import Calendario from "../../img/CalendarioCinza.png";

const AgendamentoItem = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  width: 722px;
  height: 96px;
  border-radius: 16px;
`;

const Seta = styled.img`
  height: 12px;
`;

const SetaContainer = styled.div`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Icone = styled.img`
  height: 16px;
  width: 16px;
`;

const ItemTexto = styled.p`
  color: #a098ae;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;
`;

const ItemTitulo = styled.h3`
  font-family: Poppins;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #374557;
  margin: 0;
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  flex: 1;
  gap: 0.5rem;
  white-space: nowrap;
`;

const LinhaSuperior = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataEHora = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ItemDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: #dbdbdb;
`;

const LinhaInferior = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DataOuHora = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
function ItemAgendamento({ item, corBase, seta }) {
  const BarraLateral = styled.div`
    width: 16px;
    height: 96px;
    background-color: ${(props) => props.corBase};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  `;

  function formatarDataBr(dataISO) {
    const data = new Date(dataISO);
    return data.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <AgendamentoItem>
      <BarraLateral corBase={corBase} />
      <Conteudo>
        <LinhaSuperior>
          <ItemTitulo>{item.Nome}</ItemTitulo>
          <DataEHora>
            <DataOuHora>
              <Icone src={Calendario} />
              <ItemTexto>{formatarDataBr(item.Data)}</ItemTexto>
            </DataOuHora>
            <DataOuHora>
              <Icone src={Relogio} />
              <ItemTexto>{item.Hora}H</ItemTexto>
            </DataOuHora>
          </DataEHora>
        </LinhaSuperior>
        <LinhaInferior>
          <ItemDot />
          <ItemTexto>{item.Descrição}</ItemTexto>
        </LinhaInferior>
      </Conteudo>
      <SetaContainer>
        <Seta src={seta} alt="Seta Apontando Para direita" />
      </SetaContainer>
    </AgendamentoItem>
  );
}

export default ItemAgendamento;
