import React from "react";
import { useSelector } from "react-redux";

const Login = () => {
    const user = useSelector((state) => state.usersReducers.user);

    return (
        <div>
            <h1>Bienvenido a la Página de Inicio</h1>
            {user ? (
                <p>Hola, {user.name}!</p>
            ) : (
                <p>Inicia sesión o regístrate para continuar.</p>
            )}
        </div>
    );
};

export default Login;
