import { createContext, useContext, useEffect, useState } from 'react';

export const AgendamentoContext = createContext();

export const AgendamentoProvider = ({ children }) => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/agendamentos`)
      .then((res) => res.json())
      .then((data) => setAgendamentos(data))
      .catch((err) =>
        alert("Erro ao buscar agendamentos", err)
      );
  }, []);

  return (
    <AgendamentoContext.Provider value={{
      agendamentos,
      setAgendamentos,
      diaSelecionado,
      setDiaSelecionado,
      termoBusca,
      setTermoBusca,
    }}>
      {children}
    </AgendamentoContext.Provider>
  );
};

export const useAgendamento = () => useContext(AgendamentoContext);
