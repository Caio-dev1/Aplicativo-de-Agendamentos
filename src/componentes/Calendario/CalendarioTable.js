import moment from "moment";
import { useState, useMemo } from "react";
import CalendarioTitulo from "./CalendarioTitulo";
import SetaDireita from "../../img/SetaDireita.png";
import SetaEsquerda from "../../img/SetaEsquerda.png";
import "moment/locale/pt-br";
import * as S from "./StyledElements";

moment.locale("pt-br");

function CalendarioTable({ agendamentos, setDiaSelecionado, diaSelecionado, setPopup }) {
  const [dataAtual, setDataAtual] = useState(moment());

  const mudarMes = (direcao) => {
    setDataAtual((prev) =>
      (direcao === "anterior"
        ? prev.clone().subtract(1, "month")
        : prev.clone().add(1, "month")
      ).locale("pt-br")
    );
  };

  const diasDoMes = useMemo(() => {
    const inicioMes = dataAtual.clone().startOf("month");
    const fimMes = dataAtual.clone().endOf("month");
    const diaDaSemana = inicioMes.day();
    const diasAtras = diaDaSemana === 0 ? 6 : diaDaSemana - 1;
    const inicioGrade = inicioMes.clone().subtract(diasAtras, "days");
    const fimDiaDaSemana = fimMes.day();
    const diasFrente = fimDiaDaSemana === 0 ? 0 : 7 - fimDiaDaSemana;
    const fimGrade = fimMes.clone().add(diasFrente, "days");

    const dias = [];
    const dia = inicioGrade.clone();

    while (dia.isBefore(fimGrade, "day") || dia.isSame(fimGrade, "day")) {
      dias.push(dia.clone());
      dia.add(1, "day");
    }

    return dias;
  }, [dataAtual]);

  const semanas = [];
  for (let i = 0; i < diasDoMes.length; i += 7) {
    semanas.push(diasDoMes.slice(i, i + 7));
  }

  const mapAgendamentos = {};
  agendamentos.forEach((ag) => {
    const data = moment(ag.Data).format("YYYY-MM-DD");
    mapAgendamentos[data] = ag.Status;
  });

  return (
    <S.TableWrapper>
      <S.TableCalendario>
        <S.CaptionWrapper>
          <S.CabecalhoFlex>
            <S.Seta
              src={SetaEsquerda}
              alt="Seta Esquerda"
              onClick={() => mudarMes("anterior")}
            />
            <CalendarioTitulo Titulo={dataAtual.format("MMMM")} />
            <S.Seta
              src={SetaDireita}
              alt="Seta Direita"
              onClick={() => mudarMes("proximo")}
            />
          </S.CabecalhoFlex>
        </S.CaptionWrapper>

        <thead>
          <tr>
            {["M", "T", "W", "T", "F", "S", "S"].map((dia, idx) => (
              <S.ThCabecalho key={idx}>{dia}</S.ThCabecalho>
            ))}
          </tr>
        </thead>

        <tbody>
          {semanas.map((semana, idx) => (
            <tr key={idx}>
              {semana.map((dia, i) => {
                const dataFormatada = dia.format("YYYY-MM-DD");
                const status = mapAgendamentos[dataFormatada];
                let bg = null;
                if (status === "A") bg = "#FDCB6E";
                else if (status === "C") bg = "#4CBC9A";
                else if (status === "E") bg = "#FC6B57";
                const foraMes = dia.month() !== dataAtual.month();
                const domingo = dia.day() === 0;

                return (
                  <S.TdDia
                    key={i}
                    bg={bg}
                    foraMes={foraMes}
                    domingo={domingo}
                    onClick={() => {
                      const dataClicada = dia.clone();
                      const dataFormatada = dataClicada.format("YYYY-MM-DD");
                      if (
                        diaSelecionado &&
                        dataClicada.isSame(diaSelecionado, "day")
                      ) {
                        setDiaSelecionado(null);
                        setPopup(false);
                      } else {
                        setDiaSelecionado(dataClicada);

                        if (!mapAgendamentos[dataFormatada]) {
                          setPopup(true);
                        } else {
                          setPopup(false);
                        }
                      }
                    }}
                  >
                    {dia.date()}
                  </S.TdDia>
                );
              })}
            </tr>
          ))}
        </tbody>
      </S.TableCalendario>
    </S.TableWrapper>
  );
}

export default CalendarioTable;
