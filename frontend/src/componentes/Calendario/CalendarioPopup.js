import styled from "styled-components";
import Close from "../../img/Fechar.png"
import Positivo from "../../img/Positivo.png"

const PopupBox = styled.div`
  width: 722px;
  height: 112px;
  border-radius: 16px;
  background-color: #FC6B57;
  margin-top: 40px;
  font-family: Poppins;
  display: flex;
  align-items: flex-start;
  padding: 24px 0px 0px 20px; 
  position: relative; 
  box-sizing: border-box;
`;

const CloseButton = styled.img`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const PopupImg = styled.img`
  width: 46px;
  height: 44px;
  margin-right: 16px;
  margin-top: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
`;

const PopupText = styled.p`
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #FFFFFF;
    margin: 0;
`
const PopupH3 = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
    margin: 0;
`
function CalendarioPopup({ setPopup }) {
    return ( 
        <PopupBox>
                <PopupImg src={Positivo}/>
                <TextContainer>
                    <PopupH3>Atenção!</PopupH3>
                    <PopupText>Não existem agendamentos para o dia selecionado.</PopupText>
                </TextContainer>
                <CloseButton onClick={() => setPopup(false)} src={Close}/>
        </PopupBox>
    );
}

export default CalendarioPopup;