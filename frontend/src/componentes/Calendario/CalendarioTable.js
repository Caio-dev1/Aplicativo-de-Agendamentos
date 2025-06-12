import styled from "styled-components";
import moment from "moment";
import { useState, useMemo } from "react";
import CalendarioTitulo from "./CalendarioTitulo";
import SetaDireita from "../../img/SetaDireita.png";
import SetaEsquerda from "../../img/SetaEsquerda.png";
import 'moment/locale/pt-br'

moment.locale("pt-br");

const TableWrapper = styled.div`
  padding: 14px 32px 32px 32px;
`;

const TableCalendario = styled.table`
  border-collapse: collapse;
  text-align: center;
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
  padding: 12px;
  background-color: #ffffff;
`;

function CalendarioTable() {
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

    const inicioGrade = inicioMes.clone().startOf("week").add(1, "day");
    const fimGrade = fimMes.clone().endOf("week").add(1, "day");

    const dias = [];
    const dia = inicioGrade.clone();

    while (dia.isBefore(fimGrade, "day")) {
      dias.push(dia.clone());
      dia.add(1, "day");
    }

    return dias;
  }, [dataAtual]);

  const semanas = [];
  for (let i = 0; i < diasDoMes.length; i += 7) {
    semanas.push(diasDoMes.slice(i, i + 7));
  }

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
              <ThCabecalho key={idx} style={{ color: idx === 6 ? "#FC6B57" : undefined }}>{dia}</ThCabecalho>
            ))}
          </tr>
        </thead>

        <tbody>
          {semanas.map((semana, idx) => (
            <tr key={idx}>
              {semana.map((dia, i) => (
                <TdDia
                  key={i}
                  style={{
                    color: dia.day() === 0
                      ? "#FC6B57"
                      : dia.month() === dataAtual.month()
                      ? "#000"
                      : "#bbb"
                  }}
                >
                  {dia.date()}
                </TdDia>
              ))}
            </tr>
          ))}
        </tbody>
      </TableCalendario>
    </TableWrapper>
  );
}

export default CalendarioTable;
