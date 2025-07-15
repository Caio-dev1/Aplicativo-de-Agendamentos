import styled from "styled-components";

export const CalendarioBox = styled.section`
  font-family: Poppins;
`;

export const TableWrapper = styled.div`
  padding: 14px 32px 32px 32px;
`;

export const TableCalendario = styled.table`
  border-collapse: separate;
  text-align: center;
  border-spacing: 8px;
  font-family: Poppins;
`;

export const CaptionWrapper = styled.caption`
  caption-side: top;
`;

export const CabecalhoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 40px;
`;

export const Seta = styled.img`
  cursor: pointer;
`;

export const ThCabecalho = styled.th`
  color: #a098ae;
  font-weight: 400;
`;

export const TdDia = styled.td`
  padding: 6px 10px 8px 10px;
  border-radius: 9px;
  background-color: ${({ bg }) => bg || "transparent"};
  color: ${({ foraMes, domingo }) =>
    foraMes ? "#bbb" : domingo ? "#FC6B57" : "#000"};
  cursor: pointer;
`;

export const TituloCalendario = styled.h3`
  font-family: Poppins;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #374557;
  justify-content: center;
  text-transform: capitalize;
`;
