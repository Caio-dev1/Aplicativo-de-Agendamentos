import styled from "styled-components";

const TituloContagem = styled.h3`
    font-family: Poppins;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #374557;
`

function ContagemTitulo() {
    return ( 
        <TituloContagem>
            Exames Concluídos/Andamento
        </TituloContagem>
    );
}

export default ContagemTitulo;