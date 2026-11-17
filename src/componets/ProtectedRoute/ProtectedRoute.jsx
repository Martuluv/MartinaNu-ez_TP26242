import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AouthContext";

export const ProtectedRoute = ({children}) => {

    const {user, loading } = useAuth();

    if (loading) return <div>Cargando...</div>;
    
    if (!user) return <Navigate to="/admin/login" />;

    return children;
};
