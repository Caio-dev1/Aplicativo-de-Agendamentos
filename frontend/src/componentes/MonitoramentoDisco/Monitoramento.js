import styled from "styled-components";
import DiscoProgesso from "../../img/DiscoProgesso.png";
import EstadoNormal from "../../img/Estado/EstadoNormal.png";
import EstadoAtencao from "../../img/Estado/EstadoAtencao.png";
import EstadoCritico from "../../img/Estado/EstadoCritico.png";
import EstadoAlerta from "../../img/Estado/EstadoAlerta.png";

const DiscoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

const Estados = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EstadoIcon = styled.img``;

const Grafico = styled.img`
  width: 240px;
  height: 120px;
`;

const DiscoTexto = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  color: #A098AE;
  text-align: center;
  margin: 0;
`;

const DiscoTitulo = styled.h4`
  font-family: Poppins;
  font-weight: 400;
  font-size: 17px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #A098AE;
  text-align: center;
  margin: 0;
  margin-bottom: 14px;
`;

function MonitoramentoDisco() {
  return (
    <DiscoSection>
      <DiscoTitulo>Monitoramento do Storage</DiscoTitulo>
      <Grafico src={DiscoProgesso} />
      <DiscoTexto>
        Aqui é possível visualizar o total em <br /> disco do servidor na nuvem
      </DiscoTexto>
      <Estados>
        <Col>
          <Item>
            <EstadoIcon src={EstadoAlerta} />
            <DiscoTexto>Alerta</DiscoTexto>
          </Item>
          <Item>
            <EstadoIcon src={EstadoCritico} />
            <DiscoTexto>Crítico</DiscoTexto>
          </Item>
        </Col>
        <Col>
          <Item>
            <EstadoIcon src={EstadoNormal} />
            <DiscoTexto>Normal</DiscoTexto>
          </Item>
          <Item>
            <EstadoIcon src={EstadoAtencao} />
            <DiscoTexto>Atenção</DiscoTexto>
          </Item>
        </Col>
      </Estados>
    </DiscoSection>
  );
}

export default MonitoramentoDisco;
