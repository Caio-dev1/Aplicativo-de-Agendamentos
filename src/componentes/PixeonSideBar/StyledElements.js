import styled from "styled-components";

export const BannerEstilizado = styled.section`
  background-color: #ffffff;
  margin: 2rem 2rem 3rem 2.8rem;
  height: 858px;
`;

export const ContainerBanner = styled.div`
  margin-left: 1.2rem;
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Logo = styled.img`
  height: 57px;
  margin-right: 10px;
`;

export const MenuIcone = styled.img`
  height: 30px;
`;

export const AgendamentoMenu = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AgendamentoMenuButtonAtivado = styled.button`
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

export const AgendamentoMenuButton = styled.button`
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
