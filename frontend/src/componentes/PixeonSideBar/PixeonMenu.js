import styled from "styled-components";
import LogoPixeon from "../../img/LogoPixeon.png";
import P from "../../img/Letras/P.png";
import I from "../../img/Letras/I.png";
import X from "../../img/Letras/X.png";
import E from "../../img/Letras/E.png";
import O from "../../img/Letras/O.png";
import N from "../../img/Letras/N.png";
import Calendario from "../../img/Calendario.png"
import Atividade from "../../img/Atividade.png"

const BannerEstilizado = styled.section`
  background-color: #FFFFFF;
  margin: 2rem 2rem 3rem 2.8rem;
  height: 858px;
`;
const ContainerBanner = styled.div`
  margin-left: 1.2rem;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Logo = styled.img`
  height: 57px;
  margin-right: 10px;
`;
const Letra = styled.img`
  padding-top: 5px;
  height: 27px;
`;
const MenuIcone = styled.img`
 height: 30px;
`
const AgendamentoMenu = styled.div`
 margin-top: 5rem;
 display: flex;
 flex-direction: column;
 gap: 1rem;
`
const AgendamentoMenuButtonAtivado = styled.button`
  background: #4CBC9A;
  border: none;
  color: #FFFFFF;
  width: 252px;
  height: 64px;
    gap: 24px;
    border-radius: 20px;
  padding: 16px 24px 16px 24px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  display: flex;
  align-items: center;
`
const AgendamentoMenuButton = styled.button`
  background: none;
  border: none;
  color: #A098AE;
  width: 252px;
  height: 64px;
    gap: 24px;
    border-radius: 20px;
  padding: 16px 24px 16px 24px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: left;
`
function PixeonMenu() {
  return (
    <BannerEstilizado>
      <ContainerBanner>
        <Logo src={LogoPixeon} alt="Logo da Pixeon" />
        <Letra src={P} alt="P" />
        <Letra src={I} alt="I" />
        <Letra src={X} alt="X" />
        <Letra src={E} alt="E" />
        <Letra src={O} alt="O" />
        <Letra src={N} alt="N" />
      </ContainerBanner>
    <AgendamentoMenu>
        <AgendamentoMenuButtonAtivado><MenuIcone src={Calendario} alt="Imagem de Calendário"/> Agendamento</AgendamentoMenuButtonAtivado>
        <AgendamentoMenuButton> <MenuIcone src={Atividade} alt="Imagem de Batimento Cardiáco"/> Todos os Agendamentos</AgendamentoMenuButton>
    </AgendamentoMenu>
    </BannerEstilizado>
  );
}

export default PixeonMenu;
