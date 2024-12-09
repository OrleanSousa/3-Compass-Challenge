// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

// Componente de Loading para exibir durante o carregamento
const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
    <p className="ml-4 text-lg font-medium text-gray-700">L...</p>
  </div>
);

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  // Se o estado de autenticação ainda estiver carregando, mostra a tela de carregamento
  if (!isLoaded) {
    return <Loading />;
  }

  // Se o usuário não está autenticado, redireciona para a página 403
  if (!isSignedIn) {
    return <Navigate to="/403" replace />;
  }

  // Caso esteja autenticado e o estado carregado, renderiza o componente filho
  return children;
}

export default ProtectedRoute;
