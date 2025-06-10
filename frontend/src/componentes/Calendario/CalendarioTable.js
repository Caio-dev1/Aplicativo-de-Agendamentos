import styled from "styled-components";
import CalendarioTitulo from "./CalendarioTitulo";
import SetaDireita from "../../img/SetaDireita.png";
import SetaEsquerda from "../../img/SetaEsquerda.png";

const TableCalendario = styled.table`
  border-collapse: collapse;
  text-align: center;
  font-family: Poppins;
`;

const TableWrapper = styled.div`
 padding: 14px 32px 32px 32px;
`;

const CaptionWrapper = styled.caption`
  caption-side: top;
`;

const CabecalhoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 49px;
`;

const Seta = styled.img``;

const ThCabecalho = styled.th`
  color: #A098AE;
  font-weight: 400;
    &:nth-child(7) {
    color: #FC6B57;
  }
`;

const TdDia = styled.td`
  padding: 12px;
  background-color: #FFFFFF;
    &:nth-child(7) {
    color: #FC6B57;
  }
`;

function CalendarioTable() {
  return (
<TableWrapper>
    <TableCalendario>
      <CaptionWrapper>
        <CabecalhoFlex>
          <Seta src={SetaEsquerda} alt="Seta apontando para Esquerda." />
          <CalendarioTitulo Titulo="Janeiro" />
          <Seta src={SetaDireita} alt="Seta apontando para Direita." />
        </CabecalhoFlex>
      </CaptionWrapper>

      <thead>
        <tr>
          <ThCabecalho>M</ThCabecalho>
          <ThCabecalho>T</ThCabecalho>
          <ThCabecalho>W</ThCabecalho>
          <ThCabecalho>T</ThCabecalho>
          <ThCabecalho>F</ThCabecalho>
          <ThCabecalho>S</ThCabecalho>
          <ThCabecalho>S</ThCabecalho>
        </tr>
      </thead>

      <tbody>
        <tr>
          <TdDia>1</TdDia>
          <TdDia>2</TdDia>
          <TdDia>3</TdDia>
          <TdDia>4</TdDia>
          <TdDia>5</TdDia>
          <TdDia>6</TdDia>
          <TdDia>7</TdDia>
        </tr>
        <tr>
          <TdDia>8</TdDia>
          <TdDia>9</TdDia>
          <TdDia>10</TdDia>
          <TdDia>11</TdDia>
          <TdDia>12</TdDia>
          <TdDia>13</TdDia>
          <TdDia>14</TdDia>
        </tr>
        <tr>
          <TdDia>15</TdDia>
          <TdDia>16</TdDia>
          <TdDia>17</TdDia>
          <TdDia>18</TdDia>
          <TdDia>19</TdDia>
          <TdDia>20</TdDia>
          <TdDia>21</TdDia>
        </tr>
        <tr>
          <TdDia>22</TdDia>
          <TdDia>23</TdDia>
          <TdDia>24</TdDia>
          <TdDia>25</TdDia>
          <TdDia>26</TdDia>
          <TdDia>27</TdDia>
          <TdDia>28</TdDia>
        </tr>
        <tr>
          <TdDia>29</TdDia>
          <TdDia>30</TdDia>
          <TdDia>31</TdDia>
          <TdDia>1</TdDia>
          <TdDia>2</TdDia>
          <TdDia>3</TdDia>
          <TdDia>4</TdDia>
        </tr>
      </tbody>
    </TableCalendario>
</TableWrapper>
  );
}

export default CalendarioTable;
