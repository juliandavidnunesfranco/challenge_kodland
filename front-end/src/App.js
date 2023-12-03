import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Class from "./components/Class";

function App() {
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
                <link rel="stylesheet" href="../public/style.css" />
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
                                    {/*   <p>
                                        Al utilizar un enfoque basado en
                                        componentes, React facilita la creación
                                        y el mantenimiento de interfaces de
                                        usuario interactivas y reutilizables. Su
                                        arquitectura modular permite dividir la
                                        interfaz de usuario en componentes
                                        independientes, lo que simplifica la
                                        comprensión del código y fomenta la
                                        reutilización de código en diferentes
                                        partes de la aplicación.
                                    </p>
                                    <p>
                                        Aunque React se originó en el contexto
                                        de las aplicaciones web, su versatilidad
                                        lo ha llevado más allá de las páginas
                                        web. Ahora es comúnmente utilizado en el
                                        desarrollo de aplicaciones móviles,
                                        aplicaciones web progresivas (PWA) y
                                        aplicaciones de escritorio. Su
                                        flexibilidad y eficiencia en el
                                        rendimiento lo convierten en una opción
                                        poderosa para una variedad de proyectos
                                        en el ámbito del desarrollo de software.
                                    </p> */}
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

                <div>
                    <Class />
                </div>
            </body>
        </>
    );
}

export default App;
