import styled from 'styled-components';

const StyledTitulo = styled.h1`
color: #374557;
font-family: Poppins;
font-weight: 700;
font-size: 36px;
line-height: 100%;
letter-spacing: 0%;
`
function AgendamentoTitulo() {
    return ( 
        <StyledTitulo>Agendamentos</StyledTitulo>
    );
}

export default AgendamentoTitulo;