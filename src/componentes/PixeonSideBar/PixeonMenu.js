import styled from "styled-components";
import PixeonLogo from "../../img/PixeonLogo.png";
import Calendario from "../../img/Calendario.png";
import Atividade from "../../img/Atividade.png";

const BannerEstilizado = styled.section`
  background-color: #ffffff;
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
const MenuIcone = styled.img`
  height: 30px;
`;
const AgendamentoMenu = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const AgendamentoMenuButtonAtivado = styled.button`
  background: #4cbc9a;
  border: none;
  color: #ffffff;
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
`;
const AgendamentoMenuButton = styled.button`
  background: none;
  border: none;
  color: #a098ae;
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
`;
function PixeonMenu() {
  return (
    <BannerEstilizado>
      <ContainerBanner>
        <Logo src={PixeonLogo} alt="Logo da Pixeon" />
      </ContainerBanner>
      <AgendamentoMenu>
        <AgendamentoMenuButtonAtivado>
          <MenuIcone src={Calendario} alt="Imagem de Calendário" /> Agendamento
        </AgendamentoMenuButtonAtivado>
        <AgendamentoMenuButton>
          {" "}
          <MenuIcone src={Atividade} alt="Imagem de Batimento Cardiáco" /> Todos
          os Agendamentos
        </AgendamentoMenuButton>
      </AgendamentoMenu>
    </BannerEstilizado>
  );
}

export default PixeonMenu;
