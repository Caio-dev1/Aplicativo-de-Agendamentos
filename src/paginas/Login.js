import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PixeonLogo from "../img/PixeonLogo.png";
import EmailSVG from "../img/Email.svg";
import CadeadoSVG from "../img/Cadeado.svg";

const FormularioLogin = styled.form`
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

const TituloLogin = styled.h2`
  margin: 0;
  font-size: 21px;
  color: #374557;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 75%;
  margin-bottom: 10px;
`;

const Icone = styled.img`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  pointer-events: none;
`;

const Logo = styled.img``;

const InputLogin = styled.input`
  width: 86%;
  padding: 10px 12px 10px 42px;
  font-size: 16px;
  border: 1px solid ${({ erro }) => (erro ? "#e74c3c" : "#374557")};
  box-shadow: 0 0 4px rgba(55, 69, 87, 0.4);
  border-radius: 4px;
  color: #374557;
`;

const BotaoLogin = styled.button`
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

const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  margin-bottom: 2rem;
`;

const MensagemErro = styled.small`
  color: #e74c3c;
  display: ${({ mostrar }) => (mostrar ? "block" : "none")};
  position: absolute;
  text-align: left;
`;

export default function Login() {
  const navegar = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);

  useEffect(() => {
    const fundoAnterior = document.body.style.background;
    document.body.style.background =
      "linear-gradient(90deg, rgba(101,65,225,1) 0%, rgba(34,190,167,1) 100%)";
    return () => {
      document.body.style.background = fundoAnterior;
    };
  }, []);

  function validarEmail(valor) {
    let usuario = valor.substring(0, valor.indexOf("@"));
    let dominio = valor.substring(valor.indexOf("@") + 1, valor.length);
    return (
      usuario.length >= 1 &&
      dominio.length >= 3 &&
      usuario.search("@") === -1 &&
      dominio.search("@") === -1 &&
      usuario.search(" ") === -1 &&
      dominio.search(" ") === -1 &&
      dominio.search(".") !== -1 &&
      dominio.indexOf(".") >= 1 &&
      dominio.lastIndexOf(".") < dominio.length - 1
    );
  }

  function aoEnviarFormulario(e) {
    e.preventDefault();
    let valido = true;

    if (!validarEmail(email)) {
      setErroEmail(true);
      valido = false;
    }

    if (senha.length < 6) {
      setErroSenha(true);
      valido = false;
    }

    if (valido) {
    localStorage.setItem("auth", "true");
    navegar("/app", { replace: true });
    }
  }
  return (
    <FormularioLogin onSubmit={aoEnviarFormulario}>
      <Cabecalho>
        <Logo src={PixeonLogo} alt="Logo da Pixeon" />
        <TituloLogin>Faça seu Login</TituloLogin>
      </Cabecalho>
      <InputWrapper>
        <Icone src={EmailSVG} alt="E-mail" />
        <InputLogin
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErroEmail(false);
          }}
          erro={erroEmail}
        />
        <MensagemErro mostrar={erroEmail}>E-mail inválido</MensagemErro>
      </InputWrapper>
      <InputWrapper>
        <Icone src={CadeadoSVG} alt="Senha" />
        <InputLogin
          type="password"
          placeholder="Senha"
          required
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
            setErroSenha(false);
          }}
          erro={erroSenha}
        />
        <MensagemErro mostrar={erroSenha}>
          Senha precisa ter ao menos 6 caracteres
        </MensagemErro>
      </InputWrapper>
      <BotaoLogin type="submit">Entrar</BotaoLogin>
    </FormularioLogin>
  );
}