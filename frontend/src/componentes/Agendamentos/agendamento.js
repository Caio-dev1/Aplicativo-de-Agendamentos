function Agendamentos({ agendamentos }) {
    return ( 
            <ul>
                {agendamentos.map((agendamentos) => (
                    <li key={agendamentos.id}>
                        {agendamentos.Nome}, {agendamentos.Data}, {agendamentos.Hora}, {agendamentos.Descrição}, {agendamentos.Status} 
                    </li>
                ))}
            </ul>
    );
}

export default Agendamentos;