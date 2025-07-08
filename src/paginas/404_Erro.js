import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CachorroImg from "../img/cachorrotriste_404.svg";

const Pagina = styled.div`
  background-color: #fafafa;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  color: #374557;
  text-align: center;
  padding: 0 1.6rem;
  box-sizing: border-box;
`;

const Ilustracao = styled.img`
  width: clamp(180px, 30vw, 260px);
  margin-bottom: 2rem;
`;

const Titulo = styled.h1`
  font-size: 42px;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

const Mensagem = styled.p`
  font-size: 18px;
  color: #6b7280;
  max-width: 420px;
  line-height: 1.4;
  margin-bottom: 2rem;
`;

const Botao = styled.button`
  background-color: #4cbc9a;
  color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  padding: 12px 28px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #3aa786;
  }
`;

export default function Pagina404() {
  const navegar = useNavigate();
  return (
    <Pagina>
      <Ilustracao src={CachorroImg} alt="Cachorrinho triste — erro 404" />
      <Titulo>Ops! Página não encontrada</Titulo>
      <Mensagem>
       O Charles se meteu em confusão! <br />
       A página que você buscou não existe ou você não tem permissão para acessá-la.
      </Mensagem>
      <Botao onClick={() => navegar("/")}>Voltar ao início</Botao>
    </Pagina>
  );
}
