import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";

const data = {
    email: "juliandavidnunesfranco@hotmail.es",
    password: "Abcd1234@",
};

const Button = () => {
    const dispatch = useDispatch();

    const handleStart = async () => {
        dispatch(loginUser(data));
    };

    return (
        <>
            <div className="button-container" onClick={handleStart}>
                <div className="custom-button">INICIAR</div>
            </div>
        </>
    );
};

export default Button;
