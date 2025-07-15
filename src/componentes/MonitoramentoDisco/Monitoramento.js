import DiscoProgesso from "../../img/DiscoProgesso.png";
import EstadoNormal from "../../img/Estado/EstadoNormal.png";
import EstadoAtencao from "../../img/Estado/EstadoAtencao.png";
import EstadoCritico from "../../img/Estado/EstadoCritico.png";
import EstadoAlerta from "../../img/Estado/EstadoAlerta.png";
import * as S from "./StyledElements";

function MonitoramentoDisco() {
  return (
    <S.DiscoSection>
      <S.DiscoTitulo>Monitoramento do Storage</S.DiscoTitulo>
      <S.Grafico src={DiscoProgesso} />
      <S.DiscoTexto>
        Aqui é possível visualizar o total em <br /> disco do servidor na nuvem
      </S.DiscoTexto>
      <S.Estados>
        <S.Col>
          <S.Item>
            <S.EstadoIcon src={EstadoNormal} />
            <S.DiscoTexto>Normal</S.DiscoTexto>
          </S.Item>
          <S.Item>
            <S.EstadoIcon src={EstadoAtencao} />
            <S.DiscoTexto>Atenção</S.DiscoTexto>
          </S.Item>
        </S.Col>
        <S.Col>
          <S.Item>
            <S.EstadoIcon src={EstadoAlerta} />
            <S.DiscoTexto>Alerta</S.DiscoTexto>
          </S.Item>
          <S.Item>
            <S.EstadoIcon src={EstadoCritico} />
            <S.DiscoTexto>Crítico</S.DiscoTexto>
          </S.Item>
        </S.Col>
      </S.Estados>
    </S.DiscoSection>
  );
}

export default MonitoramentoDisco;
