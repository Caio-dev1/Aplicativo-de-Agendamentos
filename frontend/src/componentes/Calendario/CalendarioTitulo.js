import styled from "styled-components";

const TituloCalendario = styled.h3`
  font-family: Poppins;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #374557;
  justify-content: center;
  text-transform: capitalize
`;

function CalendarioTitulo({ Titulo }) {
  return <TituloCalendario>{Titulo}</TituloCalendario>;
}

export default CalendarioTitulo;
