import React from "react";
import Header from "./Header";
import Button from "./Button";
import Class from "./Class";
import TwoImages from "./TwoImages";

const Home = () => {
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
                {/* Theme main style */}
                <link rel="stylesheet" href="/style.css" />
                {/* Default css file */}
                <link rel="stylesheet" href="/css/default.css" />
                <link rel="stylesheet" href="/css/minimal.css" />
                
                {/* Responsive css */}
                <link rel="stylesheet" href="/css/responsive.css" />
            </head>

            {/* ETIQUETA BODY CON EL CUERPO DE LA PAGINA  */}
            <body>
                {/*Hero Section*/}

                <div className="mp-hero-section section">
                    <div className="container">
                        {/* BARRA DE NAVEGACION DE LA PAGINA WEB. --->>> HEADER.js */}

                        <Header />

                        <div className="row">
                            <div className="col-xs-12">
                                <div className="mp-hero-content col-sm-6 col-xs-12">
                                    <h1>REACT.JS</h1>
                                    <h4>Libreria para front-end .</h4>
                                </div>
                            </div>
                        </div>
                        <Button />
                    </div>
                </div>

                {/*Section  about the course*/}
                <div className="mp-about-section section pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div
                                className="mp-section-title text-center col-xs-12 mb-60"
                                data-name="REACT"
                            >
                                <h1>REACT.JS</h1>
                            </div>
                            <div className="mb-about-content text-center col-md-10 col-md-offset-1 col-xs-12">
                                <p>
                                    <p>
                                        React.js, también conocido como React,
                                        es una biblioteca de JavaScript de
                                        código abierto para construir interfaces
                                        de usuario. Desarrollado y mantenido por
                                        Facebook, React se ha convertido en una
                                        herramienta popular para el desarrollo
                                        de aplicaciones web modernas y
                                        eficientes.
                                    </p>
                                </p>
                                <a href="#/">
                                    Leer más
                                    <i className="fa fa-long-arrow-right" />
                                    <img
                                        src="/logo192.png"
                                        alt="React Logo"
                                        className="react-logo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section figures */}
                <div>
                    <Class />
                </div>
                {/* Section Infomative */}

                <div>
                    <TwoImages />
                </div>

                <div className="mp-footer-section section">
                    <div className="mp-fotter-top">
                        <div className="container">
                            <div className="row">
                                <img
                                    className="foot-logo"
                                    src="/Logo_Kodland2.svg"
                                    alt="footer"
                                />
                                <div className="mp-footer-social text-center col-xs-12">
                                    <a href="#/">
                                        <i className="ion-social-facebook-outline" />
                                    </a>
                                    <a href="#/">
                                        <i className="ion-social-dribbble-outline" />
                                    </a>
                                    <a href="#/">
                                        <i className="ion-social-github-outline" />
                                    </a>
                                    <a href="#/">
                                        <i className="ion-social-tux" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mp-fotter-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="mp-footer-copyright col-md-6 col-xs-12">
                                    <p>
                                        Copyright © 2023 {}
                                        <a href="https://github.com/juliandavidnunesfranco/challenge_kodland">
                                            JULIAN DAVID AND KODLAND
                                        </a>
                                        . All Rights Reserved.
                                    </p>
                                </div>
                                <div className="mp-footer-contact col-md-6 col-xs-12">
                                    <p>
                                        <span>Call :</span> +57 323 568 24 68
                                    </p>
                                    <p>
                                        <span>Email :</span>
                                        juliandavidnunesfranco@hotmail.es
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Home;
