import React from "react";
import { useNavigate } from "react-router-dom";

const USER_TOKEN = "user";

const Button = () => {
    const navigate = useNavigate();
    const userToken = localStorage.getItem(USER_TOKEN);

    const handleButtonClick = () => {
        if (userToken) {
            // Si hay un token, redirige a la página de inicio de sesión
            navigate("/login");
        } else {
            // Si no hay un token, redirige a la página de registro
            navigate("/register");
        }
    };

    return (
        <>
            <div className="button-container">
                <div className="custom-button" onClick={handleButtonClick}>
                    INICIAR
                </div>
            </div>
        </>
    );
};

export default Button;
