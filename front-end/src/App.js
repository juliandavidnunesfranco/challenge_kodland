import React from "react";
import Header from "./components/Header";

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
                        {/* BARRA DE NAVEGACION DE LA PAGINA WEB.  HEADER.js. */}
                        <Header />
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="mp-hero-content col-sm-6 col-xs-12">
                                    <h1>REACT.JS</h1>
                                    <h4>Libreria para front-end .</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default App;
