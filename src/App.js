import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./paginas/Login";
import Dashboard from "./paginas/DashBoard";
import Autenticacao from "./componentes/Autenticacao";
import Pagina404 from "./paginas/404_Erro";
import { AgendamentoProvider } from './componentes/Contexts/AgendamentoContext';   

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/app/*"
          element={
            <Autenticacao>
              <AgendamentoProvider>
              <Dashboard />
              </AgendamentoProvider>
            </Autenticacao>
          }
        />
        <Route path="/404" element={<Pagina404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
