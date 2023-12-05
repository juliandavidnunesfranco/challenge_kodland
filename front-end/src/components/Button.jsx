import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Button = () => {
    const user = useSelector((state) => state.usersReducers.user);
    console.log("EL BOTON USER", user);

    return (
        <>
            <div className="button-container">
                <Link to={user?.email ? "/login" : "/register"}>
                    <div className="custom-button">INICIAR</div>
                </Link>
            </div>
        </>
    );
};

export default Button;
