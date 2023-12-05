import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div
                className={`header-section section ${
                    isMenuOpen ? "menu-open" : ""
                }`}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {/*Menu Toggle*/}
                            <div className="float-left">
                                <button
                                    className={`menu-toggle mp-mToggle text-dark ${
                                        isMenuOpen ? "open" : ""
                                    }`}
                                    title="button toggle"
                                    onClick={toggleMenu}
                                >
                                    <i
                                        className={`ion-android-${
                                            isMenuOpen ? "close" : "menu"
                                        }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div
                    className="container"
                    style={{
                        backgroundColor: "beige",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                        padding: "15px 60px",
                        position: "absolute",
                        top: "16%",
                        left: "2%",
                        transition: "all 0.3s ease 0s",
                        visibility: "visible",
                        width: "187px",
                        zIndex: 9999,
                        borderRadius: "30px",
                    }}
                >
                    <nav>
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    style={{
                                        color: "#999999",
                                        display: "block",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                        lineHeight: "32px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/login"
                                    style={{
                                        color: "##999999",
                                        display: "block",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                        lineHeight: "32px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    LOGIN
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/register"
                                    style={{
                                        color: "##999999",
                                        display: "block",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                        lineHeight: "32px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}
