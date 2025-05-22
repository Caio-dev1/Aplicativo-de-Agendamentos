import ItemAgendamento from "./ItemAgendamento";


function Agendamentos({ agendamentos }) {
    return ( 
            <ul>
                {agendamentos.map((item) => (
                <li key={item.id}>
                    <ItemAgendamento item={item}/>
                </li>
                ))}
            </ul>
    );
}

export default Agendamentos;