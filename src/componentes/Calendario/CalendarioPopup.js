import styled, { keyframes } from "styled-components";
import Close from "../../img/Fechar.png";
import Positivo from "../../img/Positivo.png";
import { useEffect, useState } from "react";


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;


const PopupBox = styled.div`
  width: 400px;
  min-height: 80px;
  border-radius: 8px;
  background-color: #FC6B57;
  font-family: Poppins;
  display: flex;
  align-items: flex-start;
  padding: 16px 16px 16px 20px;
  box-sizing: border-box;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.4s ease forwards;
`;

const CloseButton = styled.img`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

const PopupImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  margin-top: 14px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PopupText = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #FFFFFF;
  margin: 0;
`;

const PopupH3 = styled.h3`
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  margin: 0;
`;

function CalendarioPopup({ setPopup }) {
  const [isClosing, setIsClosing] = useState(false);


  useEffect(() => {
    const autoClose = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => setPopup(false), 400);
    }, 4000);

    return () => clearTimeout(autoClose);
  }, [setPopup]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setPopup(false), 400);
  };

  return (
    <PopupBox isClosing={isClosing}>
      <PopupImg src={Positivo} alt="Ícone de atenção" />
      <TextContainer>
        <PopupH3>Atenção!</PopupH3>
        <PopupText>Não existem agendamentos para o dia selecionado.</PopupText>
      </TextContainer>
      <CloseButton onClick={handleClose} src={Close} alt="Fechar" />
    </PopupBox>
  );
}

export default CalendarioPopup;
