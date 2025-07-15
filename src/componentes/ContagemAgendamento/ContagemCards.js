import * as S from "./StyledElements";

function ContagemCard({ corBase, porcentagem, titulo, imagemSeta, imagemBarra }) {
  return (
    <S.CardContagemAgendamento>
      <S.PorcetagemBola corBase={corBase}>
        <S.PorcentagemTexto>{porcentagem}%</S.PorcentagemTexto>
      </S.PorcetagemBola>
      <S.ContainerCard>
        <S.CardContagemTexto>{titulo}</S.CardContagemTexto>
        <S.BarraProgesso src={imagemBarra} alt="Barra de Progresso" />
      </S.ContainerCard>
      <S.SetaIcone src={imagemSeta} alt="Seta Apontando para Direita" />
    </S.CardContagemAgendamento>
  );
}

export default ContagemCard;
