import styled from "styled-components";
import moment from "moment";
import { useState, useMemo } from "react";
import CalendarioTitulo from "./CalendarioTitulo";
import SetaDireita from "../../img/SetaDireita.png";
import SetaEsquerda from "../../img/SetaEsquerda.png";
import "moment/locale/pt-br";

moment.locale("pt-br");

const TableWrapper = styled.div`
  padding: 14px 32px 32px 32px;
`;

const TableCalendario = styled.table`
  border-collapse: separate;
  text-align: center;
  border-spacing: 8px;
  font-family: Poppins;
`;

const CaptionWrapper = styled.caption`
  caption-side: top;
`;

const CabecalhoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 40px;
`;

const Seta = styled.img`
  cursor: pointer;
`;

const ThCabecalho = styled.th`
  color: #a098ae;
  font-weight: 400;
`;

const TdDia = styled.td`
  padding: 6px 10px 8px 10px;
  border-radius: 9px;
  background-color: ${({ bg }) => bg || "transparent"};
  color: ${({ foraMes, domingo }) =>
    foraMes ? "#bbb" : domingo ? "#FC6B57" : "#000"};
`;

function CalendarioTable({ agendamentos, setDiaSelecionado, diaSelecionado }) {
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
    console.log(mapAgendamentos);
  });

  return (
    <TableWrapper>
      <TableCalendario>
        <CaptionWrapper>
          <CabecalhoFlex>
            <Seta
              src={SetaEsquerda}
              alt="Seta Esquerda"
              onClick={() => mudarMes("anterior")}
            />
            <CalendarioTitulo Titulo={dataAtual.format("MMMM")} />
            <Seta
              src={SetaDireita}
              alt="Seta Direita"
              onClick={() => mudarMes("proximo")}
            />
          </CabecalhoFlex>
        </CaptionWrapper>

        <thead>
          <tr>
            {["M", "T", "W", "T", "F", "S", "S"].map((dia, idx) => (
              <ThCabecalho
                key={idx}
                style={{ color: idx === 6 ? "#FC6B57" : undefined }}
              >
                {dia}
              </ThCabecalho>
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
                console.log(mapAgendamentos);
                const foraMes = dia.month() !== dataAtual.month();
                const domingo = dia.day() === 0;

                return (
                  <TdDia
                    key={i}
                    bg={bg}
                    foraMes={foraMes}
                    domingo={domingo}
                    onClick={() => {
                      const dataClicada = dia.clone();
                      if (
                        diaSelecionado &&
                        dataClicada.isSame(diaSelecionado, "day")
                      ) {
                        setDiaSelecionado(null);
                      } else {
                        setDiaSelecionado(dataClicada);
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {dia.date()}
                  </TdDia>
                );
              })}
            </tr>
          ))}
        </tbody>
      </TableCalendario>
    </TableWrapper>
  );
}

export default CalendarioTable;
