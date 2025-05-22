import ItemAgendamento from "./ItemAgendamento";


function Agendamentos({ agendamentos }) {
    return ( 
            <ul>
                {agendamentos.map((item) => (
                <li>
                    <ItemAgendamento key={item.id} item={item}/>
                </li>
                ))}
            </ul>
    );
}

export default Agendamentos;