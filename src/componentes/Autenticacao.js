import { Navigate, useLocation } from "react-router-dom";

export default function Autenticacao({ children }) {
  const isAuth = localStorage.getItem("auth") === "true";
  const localizacao = useLocation();

  return isAuth ? (
    children
  ) : (
    <Navigate to="/404" state={{ from: localizacao }} replace />
  );
}
