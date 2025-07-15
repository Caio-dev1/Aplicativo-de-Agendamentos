import { useNavigate } from "react-router-dom";
import CachorroImg from "../img/cachorrotriste_404.svg";
import * as S from "./StyledElements";

export default function Pagina404() {
  const navegar = useNavigate();
  return (
    <S.Pagina>
      <S.Ilustracao src={CachorroImg} alt="Cachorrinho triste — erro 404" />
      <S.Titulo>Ops! Página não encontrada</S.Titulo>
      <S.Mensagem>
        O Charles se meteu em confusão! <br />
        A página que você buscou não existe ou você não tem permissão para acessá-la.
      </S.Mensagem>
      <S.Botao onClick={() => navegar("/")}>Voltar ao início</S.Botao>
    </S.Pagina>
  );
}
