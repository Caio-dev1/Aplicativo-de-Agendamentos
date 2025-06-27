import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login      from "./paginas/Login";
import Dashboard  from "./paginas/DashBoard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/app/*" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
