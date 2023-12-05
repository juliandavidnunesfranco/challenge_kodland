import React, { useState } from "react";
import { loginUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const data = {
        email,
        password,
    };
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(data));
    };

    return (
        <>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title>KODLAND</title>
                <meta name="description" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* All CSS Files */}
                {/* Bootstrap css */}
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
                {/* Icon Font */}
                <link rel="stylesheet" href="/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/css/ionicons.min.css" />
                <link rel="stylesheet" href="/css/et-line.css" />
                {/*fonts */}
                <link
                    rel="stylesheet"
                    href="/css/fonts/moon-20-cufonfonts/Moon2.0-Bold.otf"
                />
                <link
                    rel="stylesheet"
                    href="/css/fonts/moon-20-cufonfonts/Moon2.0-Light.otf"
                />
                <link
                    rel="stylesheet"
                    href="/css/fonts/moon-20-cufonfonts/Moon2.0-Regular.otf"
                />

                {/* Plugins css file */}
                <link rel="stylesheet" href="/css/plugins.css" />
                <link rel="stylesheet" href="/style.css" />
                <link rel="stylesheet" href="/minimal.css" />
            </head>
            <div className="section-register">
                <div
                    style={{
                        background: "#fff",
                        padding: "10px",
                        width: "70px",
                        borderRadius: "15px",
                        position: "absolute",
                        top: "30px",
                        left: "34px",
                    }}
                >
                    <Link to="/">
                        <strong> Home </strong>
                    </Link>
                </div>
                <div className="mp-contact-form ">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="row">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    defaultValue="Send Message"
                                />
                            </div>
                        </div>
                    </form>
                    <p className="form-messege" />
                </div>
            </div>
        </>
    );
};

export default Login;
