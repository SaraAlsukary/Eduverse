import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const location = useLocation();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user")!);
        setIsAuthenticated(user?.isLoggedIn === true);
    }, []);

    if (isAuthenticated === null) return null;

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/"
                replace
                state={{ from: location.pathname, error: "login-required" }}
            />
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
