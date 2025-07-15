import styled from "styled-components";

/* -------- Página 404 -------- */
export const Pagina = styled.div`
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

export const Ilustracao = styled.img`
  width: clamp(180px, 30vw, 260px);
  margin-bottom: 2rem;
`;

export const Titulo = styled.h1`
  font-size: 42px;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

export const Mensagem = styled.p`
  font-size: 18px;
  color: #6b7280;
  max-width: 420px;
  line-height: 1.4;
  margin-bottom: 2rem;
`;

export const Botao = styled.button`
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

/* -------- Dashboard -------- */
export const AppWrapper = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  width: 22rem;
  background-color: #ffffff;
`;

export const MainContent = styled.div`
  flex: 1;
  background-color: #fafafa;
  min-height: 100vh;
`;

export const TopBar = styled.div`
  background-color: #ffffff;
  height: 120px;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const PageBody = styled.div`
  padding: 0 1.8rem;
`;

export const ContentRow = styled.div`
  display: flex;
  gap: 2rem;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  overflow-wrap: normal;
`;

export const RightColumn = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 722px;
  height: 404px;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

/* -------- Login -------- */
export const FormularioLogin = styled.form`
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 520px;
  height: 500px;
  margin: 13rem auto;
  background-color: #ffffff;
  border-radius: 8px;
  gap: 14px;
`;

export const TituloLogin = styled.h2`
  margin: 0;
  font-size: 21px;
  color: #374557;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 75%;
  margin-bottom: 10px;
`;

export const Icone = styled.img`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  pointer-events: none;
`;

export const Logo = styled.img``;

export const InputLogin = styled.input`
  width: 86%;
  padding: 10px 12px 10px 42px;
  font-size: 16px;
  border: 1px solid ${({ erro }) => (erro ? "#e74c3c" : "#374557")};
  box-shadow: 0 0 4px rgba(55, 69, 87, 0.4);
  border-radius: 4px;
  color: #374557;
`;

export const BotaoLogin = styled.button`
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 75%;
  border-radius: 5px;
  background-color: #4cbc9a;
  box-shadow: 0 0 4px rgba(55, 69, 87, 0.4);
  border: none;
  font-family: inherit;
  color: #fff;
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  margin-bottom: 2rem;
`;

export const MensagemErro = styled.small`
  color: #e74c3c;
  display: ${({ mostrar }) => (mostrar ? "block" : "none")};
  position: absolute;
  text-align: left;
`;
