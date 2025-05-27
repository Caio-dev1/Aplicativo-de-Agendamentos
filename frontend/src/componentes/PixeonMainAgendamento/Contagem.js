import styled from "styled-components";
import ContagemTitulo from "./ContagemTitulo";
import ContagemCard from "./ContagemCards";
import SetadireitaC from "../../img/SetaConcluido.png";
import SetadiretaA from "../../img/SetaAndamento.png";
import ProgessbarC from "../../img/ProgessbarC.png";
import ProgessbarA from "../../img/ProgessbarA.png";
import { useEffect, useState } from "react";

const ContagemAgendamentos = styled.section`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ContainerAgendamentosCards = styled.div`
  display: flex;
  gap: 1rem;
`;
function ContagemListagem({ agendamentos }) {
  const [quantidadeConcluidos, setQuantidadeConcluidos] = useState(null);
  const [quantidadeAndamento, setQuantidadeAndamento] = useState(null);

  useEffect(() => {
    const agendamentosConcluidos = agendamentos.filter(
      (agendamento) => agendamento.Status === "C"
    ).length;
    const agendamentosAndamento = agendamentos.filter(
      (agendamento) => agendamento.Status === "A"
    ).length;
    var porcentagemConcluidos = Math.floor(
      (agendamentosConcluidos / agendamentos.length) * 100
    );
    var porcetagemAndamento = Math.floor(
      (agendamentosAndamento / agendamentos.length) * 100
    );
    setQuantidadeConcluidos(porcentagemConcluidos);
    setQuantidadeAndamento(porcetagemAndamento);
  }, [agendamentos]);

  return (
    <ContagemAgendamentos>
      <ContagemTitulo />
      <ContainerAgendamentosCards>
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
      </ContainerAgendamentosCards>
    </ContagemAgendamentos>
  );
}

export default ContagemListagem;
