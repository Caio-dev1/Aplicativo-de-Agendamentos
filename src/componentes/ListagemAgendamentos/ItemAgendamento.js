import moment from "moment";
import Calendario from "../../img/CalendarioCinza.png";
import Relogio from "../../img/Relogio.png";
import * as S from "./StyledElements";

moment.locale("pt-br");

function ItemAgendamento({ item, corBase, seta }) {
  function formatarData(dataISO) {
    const data = moment(dataISO);
    return data.format("D [de] MMMM [de] YYYY");
  }

  return (
    <S.AgendamentoItem>
      <S.BarraLateral corBase={corBase} />
      <S.Conteudo>
        <S.LinhaSuperior>
          <S.ItemTitulo>{item.Nome}</S.ItemTitulo>
          <S.DataEHora>
            <S.DataOuHora>
              <S.Icone src={Calendario} />
              <S.ItemTexto>{formatarData(item.Data)}</S.ItemTexto>
            </S.DataOuHora>
            <S.DataOuHora>
              <S.Icone src={Relogio} />
              <S.ItemTexto>{item.Hora}H</S.ItemTexto>
            </S.DataOuHora>
          </S.DataEHora>
        </S.LinhaSuperior>
        <S.LinhaInferior>
          <S.ItemDot />
          <S.ItemTexto>{item.Descrição}</S.ItemTexto>
        </S.LinhaInferior>
      </S.Conteudo>
      <S.SetaContainer>
        <S.Seta src={seta} alt="Seta Apontando Para direita" />
      </S.SetaContainer>
    </S.AgendamentoItem>
  );
}

export default ItemAgendamento;
