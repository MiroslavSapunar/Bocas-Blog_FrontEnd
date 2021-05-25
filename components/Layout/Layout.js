import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Layout.module.scss'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-xl navbar-light justify-content-center align-items-center mx-0 px-0" style={{ borderBottom: "1px solid rgb(233, 233, 234)" }}>
            <div className="row align-items-center justify-content-start mx-0 px-0 py-2" style={{ width: "80%", minHeight: "5rem" }}>

                <div className="col-6 col-lg-2 order-1  mx-0 px-0">
                    <div className="row justify-content-between align-items-center mx-0 px-0">
                        <Link href="/">
                            <a href="/">
                                <Image
                                    src="/bocas.png"
                                    alt="Bocas Mercado consciente"
                                    height="48"
                                    width="160"
                                />
                            </a>
                        </Link>

                    </div>
                </div>

                <div className="col-12 col-lg-8 col-xl-9 order-lg-2 order-12 mx-0 px-0">
                    <div className="row w-100 justify-content-center align-items-center mx-0 my-1">
                        <div className="collapse navbar-collapse justify-content-end w-75" id="navbarToggler">
                            <ul className="navbar-nav">

                                <Link href="/">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a href="/" className={`nav-link ${styles.categoria}`} >Home</a>
                                    </li>
                                </Link>

                                <Link href="/novedades">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a href="/novedades" className={`nav-link ${styles.categoria}`} >Novedades</a>
                                    </li>
                                </Link>

                                <Link href="/nutricion">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a href="/nutricion" className={`nav-link ${styles.categoria}`} >Nutrición</a>
                                    </li>
                                </Link>

                                <Link href="/recetas">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a href="/recetas" className={`nav-link ${styles.categoria}`} >Recetas</a>
                                    </li>
                                </Link>
                                <Link href="/ecologia">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a href="/ecologia" className={`nav-link ${styles.categoria}`} >Ecología</a>
                                    </li>
                                </Link>

                                <Link href="/autores">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a href="/autores" className={`nav-link ${styles.categoria}`} >Autores</a>
                                    </li>
                                </Link>

                                <a className={` py-0 align-items-center ${styles.botonBocas}`} role="button" rel="noopener noreferrer" target="_blank" href="https://www.bocas.com.ar/?utm_source=Blog&utm_campaign=Blog">Visitá la Tienda</a>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-2 col-xl-1 order-3 mx-0 px-0">
                    <div className="row w-100 justify-content-end align-items-center mx-0 my-1">

                        <a className="mx-4" href="#" style={{ fontSize: "1rem" }}>
                            <i className={`fas fa-search ${styles.icono}`} alt={"busqueda-bocas-mercado"}></i>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>

            </div>
        </nav >
    )
}

function Footer() {
    return (
        <nav className="navbar sticky-bottom navbar-light bg-light justify-content-center px-0">
            <div className="row align-items-center justify-content-between py-1" style={{ width: "80%" }}>

                <div className="col-12 col-md-4 align-items-center">
                    <div className="row justify-content-center">
                        <a className={`${styles.link}`} rel="noopener noreferrer" target="_blank" role="button" href="https://www.bocas.com.ar/?utm_source=Blog&utm_campaign=Blog" style={{ fontSize: "1.5rem" }}>Visitá Bocas Mercado</a>
                    </div>
                </div>

                <div className="col-12 col-md-4 py-4 align-items-center">
                    <div className="row justify-content-center">
                        <a className={`${styles.link}`} rel="noopener noreferrer" target="_blank" role="button" href="https://www.bocas.com.ar/nosotros/?utm_source=Blog&utm_campaign=Blog" style={{ fontSize: "1.25rem" }}>Sobre nosotros</a>
                        <Link href="/contacto">
                            <a className={`${styles.link}`} role="button" href="/contacto" style={{ fontSize: "1.25rem" }}>Contacto</a>
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-4 align-items-center">
                    <div className="row justify-content-around px-4 mx-0">
                        <a style={{ fontSize: "1.75rem" }} href="https://api.whatsapp.com/send/?phone=5491136599170&text&app_absent=0">
                            <i className={`fab fa-whatsapp ${styles.icono}`} alt={"bocas-mercado-whatsapp"}></i>
                        </a>

                        <a style={{ fontSize: "1.75rem" }} href="https://www.instagram.com/bocasmercado/">
                            <i className={`fab fa-instagram ${styles.icono}`} alt={"bocas-mercado-instagram"}></i>
                        </a>
                    </div>
                </div>

            </div>
        </nav >
    )
}

export default function Layout({ children }) {
    return (
        <div>
            <Head>

                <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta lang="es" />

                <title key="title">Blog de Alimentación Consciente | Bocas Mercado Blog</title>
                <meta name="title" content="Blog de Alimentación Consciente | Bocas Mercado Blog" />
                <meta name="description" key="description" content="Si ingresas vas a encontrar Datos, Consejos y Recomendaciones de Expertos sobre temáticas como Nutrición, Ecología, Meditación y Cuidado Personal." />
                <meta name="keywords" content="bocas, mercado, expertos, nutricion, ecologia, meditacion, cuidado personal" />

                <meta property="og:title" content="Blog de Alimentación Consciente | Bocas Mercado Blog" />
                <meta property="og:site_name" content="Blog de Alimentación Consciente | Bocas Mercado Blog" />
                <meta property="og:description" content="Si ingresas vas a encontrar Datos, Consejos y Recomendaciones de Expertos sobre temáticas como Nutrición, Ecología, Meditación y Cuidado Personal." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blog.bocas.com.ar/" />
                <meta property="og:image" content="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/309/998/themes/common/logo-243132392-1601649288-ec5d9eaafdabc508ef3d2db5177acd451601649289.png?0" />
                <meta property="og:image:secure_url" content="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/309/998/themes/common/logo-243132392-1601649288-ec5d9eaafdabc508ef3d2db5177acd451601649289.png?0" />

                <link rel="icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="/scripts/analytics.js" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://scontent.cdninstagram.com" />


                <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
                <script src="/scripts/analytics.js" />

            </Head>
            <body>
                <header>
                    <NavBar />
                </header>
                <main >
                    <article>
                        <div className="container-fluid px-0">
                            <div className="row justify-content-center mx-0 px-0">
                                {children}
                            </div>
                        </div>
                    </article>
                </main>
                <footer>
                    <Footer />
                </footer>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossOrigin="anonymous"></script>
            </body>
        </div>
    )
}