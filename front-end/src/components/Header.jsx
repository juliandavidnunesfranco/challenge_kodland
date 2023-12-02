import React, { useState } from "react";

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
                                <a
                                    href="/"
                                    style={{
                                        color: "#3e3e3e",
                                        display: "block",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                        lineHeight: "32px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    style={{
                                        color: "#3e3e3e",
                                        display: "block",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                        lineHeight: "32px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    CLASE 1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    style={{
                                        color: "#3e3e3e",
                                        display: "block",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                        lineHeight: "32px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    CLASE 2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    style={{
                                        color: "#3e3e3e",
                                        display: "block",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                        lineHeight: "32px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    CLASE 3
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    style={{
                                        color: "#3e3e3e",
                                        display: "block",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                        lineHeight: "32px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    CLASE 4
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/"
                                    style={{
                                        color: "#3e3e3e",
                                        display: "block",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        letterSpacing: "0.5px",
                                        lineHeight: "32px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    CLASE 5
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}{" "}
        </>
    );
}
