import styled from "styled-components";
import Lupa from "../../img/Lupa.png";

const BarraPesquisa = styled.div`
  display: flex;
  align-items: center;
  width: 513px;
  height: 60px;
  background-color: #FAFAFA;
  border-radius: 16px;
  padding: 2px 32px 2px 24px;
  gap: 8px;
`;

const IconeLupa = styled.img`
  font-size: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  color: #7c7c7c;
  width: 100%;
  background: transparent;

  &::placeholder {
    color: #b2b2b2;
    font-family: Poppins, sans-serif;
  }
`;

function AgendamentoPesquisa() {
  return (
    <BarraPesquisa>
      <IconeLupa src={Lupa} />
      <Input placeholder="Digite para pesquisar..." />
    </BarraPesquisa>
  );
}

export default AgendamentoPesquisa;
