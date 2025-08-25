// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// simple auth hook
function useAuth() {
  const isAuthenticated = false; 
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}