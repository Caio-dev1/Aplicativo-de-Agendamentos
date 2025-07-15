import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PixeonLogo from "../img/PixeonLogo.png";
import EmailSVG from "../img/Email.svg";
import CadeadoSVG from "../img/Cadeado.svg";
import * as S from "./StyledElements";

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
    <S.FormularioLogin onSubmit={aoEnviarFormulario}>
      <S.Cabecalho>
        <S.Logo src={PixeonLogo} alt="Logo da Pixeon" />
        <S.TituloLogin>Faça seu Login</S.TituloLogin>
      </S.Cabecalho>
      <S.InputWrapper>
        <S.Icone src={EmailSVG} alt="E-mail" />
        <S.InputLogin
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErroEmail(false);
          }}
          erro={erroEmail}
        />
        <S.MensagemErro mostrar={erroEmail}>E-mail inválido</S.MensagemErro>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Icone src={CadeadoSVG} alt="Senha" />
        <S.InputLogin
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
        <S.MensagemErro mostrar={erroSenha}>
          Senha precisa ter ao menos 6 caracteres
        </S.MensagemErro>
      </S.InputWrapper>
      <S.BotaoLogin type="submit">Entrar</S.BotaoLogin>
    </S.FormularioLogin>
  );
}
