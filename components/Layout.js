import Head from 'next/head'
import Link from 'next/link'

import styles from './Layout.module.scss'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center align-items-center mx-0 px-0" style={{ borderBottom: "1px solid rgb(233, 233, 234)" }}>
            <div className="row align-items-center justify-content-start mx-0 px-0 py-2" style={{ width: "80%", minHeight: "5rem" }}>

                <div className="col-6 col-lg-2 order-1  mx-0 px-0">
                    <div className="row justify-content-between align-items-center mx-0 px-0">
                        <Link href="/">
                            <a href="/">
                                <img src="bocas.png" className={`${styles.logo}`} alt={"bocas-mercado-consciente"} />
                            </a>
                        </Link>

                    </div>
                </div>

                <div className="col-12 col-lg-9 order-lg-2 order-12 mx-0 px-0">
                    <div className="row w-100 justify-content-center align-items-center mx-0 my-1">
                        <div className="collapse navbar-collapse justify-content-end w-75" id="navbarToggler">
                            <ul className="navbar-nav">

                                <Link href="/">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Home</a>
                                    </li>
                                </Link>

                                <Link href="/novedades">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Novedades</a>
                                    </li>
                                </Link>

                                <Link href="/posts?nutricion">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Nutrición</a>
                                    </li>
                                </Link>

                                <Link href="/posts?recetas">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Recetas</a>
                                    </li>
                                </Link>
                                <Link href="/posts?habitos">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Hábitos</a>
                                    </li>
                                </Link>

                                <Link href="/contacto">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Preguntas</a>
                                    </li>
                                </Link>

                                <a className={` py-0 align-items-center ${styles.botonBocas}`} role="button" href="https://bocas.com.ar/">Visitá la Tienda</a>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-1 order-3 mx-0 px-0">
                    <div className="row w-100 justify-content-end align-items-center mx-0 my-1">

                        <a className="mx-4" href="#">
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
            <div className="row align-items-center justify-content-between py-4" style={{ width: "80%" }}>
                <div className="col-12 col-lg-6">
                    <div className="row align-items-center justify-content-start px-0">
                        <h5>¡Subscribite a nuestro Newsletter!</h5>
                        <p>Lorem ipsum dolor sit amet, perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
                    </div>
                </div>
                <div className="col-8 col-lg-4">
                    <div className="row align-items-center justify-content-end px-0">
                        <div className="d-flex">
                            <input type="email" className="form-control" placeholder="Deshabilitado" disabled />
                            <button type="submit" className="btn btn-secondary">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-4 col-lg-2 mx-0 px-0">
                    <div className="row justify-content-around align-items-center px-0 mx-0">

                        <a href="https://api.whatsapp.com/send/?phone=5491136599170&text&app_absent=0">
                            <i className={`fab fa-whatsapp ${styles.icono}`} alt={"bocas-mercado-whatsapp"}></i>
                        </a>

                        <a href="https://www.instagram.com/bocasmercado/">
                            <i className={`fab fa-instagram ${styles.icono}`} alt={"bocas-mercado-instagram"}></i>
                        </a>

                        <a href="https://www.facebook.com/BOCAS-Mercado-Consciente-109340780925806">
                            <i className={`fab fa-facebook-f ${styles.icono}`} alt={"bocas-mercado-facebook"}></i>
                        </a>

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default function Layout({ children }) {
    return (
        <>
            <Head lang="es">
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght&family=Montserrat:wght@200;300;400;500;600;700&&family=Roboto+Slab:wght@100;200;400;500;600;700;800;900&display=swap" rel="stylesheet" />

                <title>Bocas Blog | Alimentacion Consciente</title>
                <meta name="description" content="Blog Online de Bocas" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:site_name" content="Bocas Blog" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Bocas Blog Online" />
                <meta property="og:description" content="Alimentacion Consciente" />
                <meta property="og:url" content="https://www.bocas.com.ar" />

                <meta property="og:image" content="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/309/998/themes/common/logo-243132392-1601649288-ec5d9eaafdabc508ef3d2db5177acd451601649289.png?0" />
                <meta property="og:image:secure_url" content="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/309/998/themes/common/logo-243132392-1601649288-ec5d9eaafdabc508ef3d2db5177acd451601649289.png?0" />

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
        </>
    )
}