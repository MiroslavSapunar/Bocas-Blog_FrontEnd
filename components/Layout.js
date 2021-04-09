import Head from 'next/head'
import Link from 'next/link'


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center align-items-center px-0">
            <div className="row align-items-center justify-content-between" style={{ width: "80%", minHeight: "5rem" }}>

                <div className="col-md-12 col-lg-8">
                    <div className="row align-items-center justify-content-around">
                        <div className="col px-0">
                            <Link href="/">
                                <a href="/">
                                    <img src="bocas.png" style={{ width: "250px", height: "auto" }} alt={"bocas-mercado-consciente"} />
                                </a>
                            </Link>
                        </div>

                        <div className="col-2 px-0">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>

                    <div className="row justify-content-start aling-items-center ">
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav mr-auto ">
                                <div className="row mx-0 my-1">

                                    <Link href="/posts">
                                        <li className="nav-item mx-2">
                                            <a className="nav-link" href="/posts">Posts</a>
                                        </li>
                                    </Link>

                                    <Link href="/posts?nutricion">
                                        <li className="nav-item mx-2">
                                            <a className="nav-link" href="/posts?nutricion">Nutricion</a>
                                        </li>
                                    </Link>

                                    <Link href="/posts?ejercicio">
                                        <li className="nav-item mx-2">
                                            <a className="nav-link" href="/posts?ejercicio">Ejercicio</a>
                                        </li>
                                    </Link>
                                    <Link href="/posts?habitos">
                                        <li className="nav-item mx-2">
                                            <a className="nav-link" href="/posts?habitos">Habitos</a>
                                        </li>
                                    </Link>

                                    <Link href="/contacto">
                                        <li className="nav-item mx-2">
                                            <a className="nav-link" href="/contacto">Contacto</a>
                                        </li>
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4  col-lg-3">
                    <div className="row align-items-center justify-content-around ">

                        <ul className="navbar-nav mx-0 ">
                            <div className="row mx-0 my-1">
                                <a className="nav-link" href="https://bocas.com.ar/">MERCADO</a>
                            </div>
                        </ul>

                        <a href="https://api.whatsapp.com/send/?phone=5491136599170&text&app_absent=0">
                            <i className="fab fa-whatsapp-square" style={{ color: `rgb(65, 110, 75, 1)`, paddingLeft: "1rem", height: "1.5rem", width: "auto" }} alt={"bocas-mercado-whatsapp"}></i>
                        </a>

                        <a href="https://www.instagram.com/bocasmercado/">
                            <i className="fab fa-instagram-square" style={{ color: `rgb(65, 110, 75, 1)`, paddingLeft: "1rem", height: "1.5rem", width: "auto" }} alt={"bocas-mercado-instagram"}></i>
                        </a>

                        <a href="https://www.facebook.com/BOCAS-Mercado-Consciente-109340780925806">
                            <i className="fab fa-facebook-square" style={{ color: `rgb(65, 110, 75, 1)`, paddingLeft: "1rem", height: "1.5rem", width: "auto" }} alt={"bocas-mercado-facebook"}></i>
                        </a>
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
                        <h5>¡Subcribite a nuestro Newsletter!</h5>
                        <p>Lorem ipsum dolor sit amet, perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="row align-items-center justify-content-end px-0">
                        <div className="d-flex">
                            <input type="email" className="form-control" placeholder="Deshabilitado" disabled />
                            <button type="submit" className="btn btn-secondary">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {/*             
            <a class="navbar-brand" href="#">Fixed bottom</a> */}

        </nav>
    )
}

export default function Layout({ children }) {
    return (
        <>
            <Head lang="es">
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />

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
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>


            </body>
        </>
    )
}