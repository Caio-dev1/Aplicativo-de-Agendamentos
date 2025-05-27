import styled from "styled-components";
import ContagemTitulo from "./ContagemTitulo";
import ContagemCard from "./ContagemCards";

import SetadireitaC from "../../img/SetaConcluido.png";
import SetadiretaA from "../../img/SetaAndamento.png";
import ProgessbarC from "../../img/ProgessbarC.png";
import ProgessbarA from "../../img/ProgessbarA.png";

const ContagemAgendamentos = styled.section`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ContainerAgendamentosCards = styled.div`
 display: flex;
 gap: 1rem;
`
function ContagemListagem() {
  return (
    <ContagemAgendamentos>
      <ContagemTitulo />
    <ContainerAgendamentosCards>
        <ContagemCard
            corBase="#4CBC9A"
            porcentagem={75}
            titulo="Concluído"
            imagemSeta={SetadireitaC}
            imagemBarra={ProgessbarC}
        />

        <ContagemCard
            corBase="#FEC64F"
            porcentagem={50}
            titulo="Em Andamento"
            imagemSeta={SetadiretaA}
            imagemBarra={ProgessbarA}
        />
    </ContainerAgendamentosCards>
    </ContagemAgendamentos>
  );
}

export default ContagemListagem;
