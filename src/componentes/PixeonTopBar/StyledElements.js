import styled from "styled-components";

export const TopoBarraSecao = styled.section`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  justify-content: space-between;
`;

export const PerfilWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #4cbc9a;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const PerfilImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const IconesContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const Icone = styled.img`
  height: 32px;
`;

export const FerramentasContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const BarraPesquisa = styled.div`
  display: flex;
  align-items: center;
  width: 513px;
  height: 60px;
  background-color: #fafafa;
  border-radius: 16px;
  padding: 2px 32px 2px 24px;
  gap: 8px;
`;

export const IconeLupa = styled.img`
  font-size: 20px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  color: #7c7c7c;
  width: 100%;
  background: transparent;
  font-family: Poppins, sans-serif;

  &::placeholder {
    color: #b2b2b2;
    font-family: Poppins, sans-serif;
  }
`;

export const StyledTitulo = styled.h1`
  color: #374557;
  font-family: Poppins;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
`;
