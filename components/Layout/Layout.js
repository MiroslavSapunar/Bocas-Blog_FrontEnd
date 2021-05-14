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
                                        <a className={`nav-link ${styles.categoria}`} >Home</a>
                                    </li>
                                </Link>

                                <Link href="/Novedades">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Novedades</a>
                                    </li>
                                </Link>

                                <Link href="/Nutricion">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Nutrición</a>
                                    </li>
                                </Link>

                                <Link href="/Recetas">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Recetas</a>
                                    </li>
                                </Link>
                                <Link href="/Ecologia">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Ecología</a>
                                    </li>
                                </Link>

                                <Link href="/Contacto">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.categoria}`} >Preguntas</a>
                                    </li>
                                </Link>

                                <a className={` py-0 align-items-center ${styles.botonBocas}`} role="button" href="https://bocas.com.ar/">Visitá la Tienda</a>

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
            <div className="row align-items-center justify-content-around py-4" style={{ width: "80%" }}>
                {/* <div className="col-12 col-md-6 px-0 py-2 ">

                    <div className="row align-items-center justify-content-center px-0">
                        <h5>¡Subscribite a nuestro Newsletter!</h5>
                    </div>
                    <div className="row align-items-center justify-content-center px-0">
                        <div className="d-flex">
                            <input type="email" className="form-control" placeholder="¡Próximamente!" disabled />
                            <button type="submit" className="btn btn-secondary" style={{ fontSize: "1rem", maxWidth: "3rem" }}>
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>


                <div className="coL-12  mx-0 px-0 py-2">
                    <div className="row justify-content-around align-items-center px-0 mx-0">
                    </div>
                </div>
                </div> */}

                <a style={{ fontSize: "1.75rem" }} href="https://api.whatsapp.com/send/?phone=5491136599170&text&app_absent=0">
                    <i className={`fab fa-whatsapp ${styles.icono}`} alt={"bocas-mercado-whatsapp"}></i>
                </a>

                <a style={{ fontSize: "1.75rem" }} href="https://www.instagram.com/bocasmercado/">
                    <i className={`fab fa-instagram ${styles.icono}`} alt={"bocas-mercado-instagram"}></i>
                </a>

                <a style={{ fontSize: "1.75rem" }} href="https://www.facebook.com/BOCAS-Mercado-Consciente-109340780925806">
                    <i className={`fab fa-facebook-f ${styles.icono}`} alt={"bocas-mercado-facebook"}></i>
                </a>



            </div>
        </nav>
    )
}

export default function Layout({ children }) {
    return (
        <div>
            <Head lang="es">
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                    });
                    `,
                    }}
                />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

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
        </div>
    )
}