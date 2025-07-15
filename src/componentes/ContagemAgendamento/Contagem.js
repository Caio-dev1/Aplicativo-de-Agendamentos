import { useEffect, useState } from "react";
import ContagemTitulo from "./ContagemTitulo";
import ContagemCard from "./ContagemCards";
import SetadireitaC from "../../img/SetaConcluido.png";
import SetadiretaA from "../../img/SetaAndamento.png";
import ProgessbarC from "../../img/ProgessbarC.png";
import ProgessbarA from "../../img/ProgessbarA.png";
import * as S from "./StyledElements";

function ContagemListagem({ agendamentos }) {
  const [quantidadeConcluidos, setQuantidadeConcluidos] = useState("...");
  const [quantidadeAndamento, setQuantidadeAndamento] = useState("...");

  useEffect(() => {
    const agendamentosConcluidos = agendamentos.filter(
      (agendamento) => agendamento.Status === "C"
    ).length;
    const agendamentosAndamento = agendamentos.filter(
      (agendamento) => agendamento.Status === "A"
    ).length;
    const agendamentoSemE = agendamentos.filter(
      (agendamento) => agendamento.Status !== "E"
    ).length;
    var porcentagemConcluidos = Math.floor(
      (agendamentosConcluidos / agendamentoSemE) * 100
    );
    var porcetagemAndamento = Math.floor(
      (agendamentosAndamento / agendamentoSemE) * 100
    );
    setQuantidadeConcluidos(porcentagemConcluidos);
    setQuantidadeAndamento(porcetagemAndamento);
  }, [agendamentos]);

  return (
    <S.ContagemAgendamentos>
      <ContagemTitulo />
      <S.ContainerAgendamentosCards>
        <ContagemCard
          corBase="#4CBC9A"
          porcentagem={quantidadeConcluidos}
          titulo="Concluído"
          imagemSeta={SetadireitaC}
          imagemBarra={ProgessbarC}
        />
        <ContagemCard
          corBase="#FEC64F"
          porcentagem={quantidadeAndamento}
          titulo="Em Andamento"
          imagemSeta={SetadiretaA}
          imagemBarra={ProgessbarA}
        />
      </S.ContainerAgendamentosCards>
    </S.ContagemAgendamentos>
  );
}

export default ContagemListagem;
