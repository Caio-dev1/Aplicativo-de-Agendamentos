import styled from "styled-components";
import Lupa from "../../img/Lupa.png";
import { useState, useEffect, useRef } from "react";

const BarraPesquisa = styled.div`
  display: flex;
  align-items: center;
  width: 513px;
  height: 60px;
  background-color: #fafafa;
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
  font-family: Poppins, sans-serif;

  &::placeholder {
    color: #b2b2b2;
    font-family: Poppins, sans-serif;
  }
`;

function AgendamentoPesquisa({ setTermoBusca }) {
  const [inputValue, setInputValue] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setTermoBusca(inputValue);
    }, 300);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [inputValue, setTermoBusca]);

  return (
    <BarraPesquisa>
      <IconeLupa src={Lupa} />
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite para pesquisar..."
      />
    </BarraPesquisa>
  );
}

export default AgendamentoPesquisa;
