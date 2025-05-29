import styled from "styled-components";

const AgendamentoItem = styled.div`
 background-color: #FFFFFF;
 display: flex;
 align-items: center;
    width: 722px;
    height: 96px;
    border-radius: 16px;
`

const BarraLateral = styled.div`
  width: 16px;
  height: 96px;
  background-color: #4CBC9A;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const Seta = styled.img`
 heigth: 12px;
`

function ItemAgendamento({ item }) {
    return ( 
        
        <AgendamentoItem>
            <BarraLateral></BarraLateral>
            {item.Nome} , 
            {item.Data} ,
            {item.Hora} ,
            {item.Descrição} ,
            {item.Status}
            <Seta src={""} alt="Seta Apontando Para direita"/>
        </AgendamentoItem>
    );
}

export default ItemAgendamento;