import Lupa from "../../img/Lupa.png";
import { useState, useEffect, useRef } from "react";
import * as S from "./StyledElements";

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
    <S.BarraPesquisa>
      <S.IconeLupa src={Lupa} />
      <S.Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite para pesquisar..."
      />
    </S.BarraPesquisa>
  );
}

export default AgendamentoPesquisa;
