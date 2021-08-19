import Link from 'next/link'
import Image from 'next/image'
import styles from './NavBar.module.scss'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-xl navbar-light justify-content-center align-items-center mx-0 px-0" style={{ borderBottom: "1px solid rgb(233, 233, 234)" }}>
            <div className="row align-items-center justify-content-start mx-0 px-0 py-2" style={{ width: "80%", minHeight: "5rem" }}>

                <div className="col-6 col-xl-2 order-1  mx-0 px-0">
                    <div className="row justify-content-between align-items-center mx-0 px-0">

                        <Link href="/">
                            <a href="/">
                                <Image
                                    src="/bocas.png"
                                    alt="Bocas Mercado consciente"
                                    height="155"
                                    width="480"
                                />
                            </a>
                        </Link>

                    </div>
                </div>

                <div className="col-12 col-xl-9 order-xl-2 order-12 mx-0 px-0">
                    <div className="row w-100 justify-content-center align-items-center mx-0 my-1">
                        <div className="collapse navbar-collapse justify-content-end w-75" id="navbarToggler">
                            <ul className="navbar-nav pl-4">

                                <li className={`nav-item ${styles.navItem}`}>
                                    <Link href="/novedades">
                                        <a href="/novedades" className={`nav-link ${styles.categoria}`} >Novedades</a>
                                    </Link>
                                </li>

                                <li className={`nav-item ${styles.navItem}`}>
                                    <Link href="/nutricion">
                                        <a href="/nutricion" className={`nav-link ${styles.categoria}`} >Nutrición</a>
                                    </Link>
                                </li>

                                <li className={`nav-item ${styles.navItem}`}>
                                    <Link href="/recetas">
                                        <a href="/recetas" className={`nav-link ${styles.categoria}`} >Recetas</a>
                                    </Link>
                                </li>

                                <li className={`nav-item ${styles.navItem}`}>
                                    <Link href="/ecologia">
                                        <a href="/ecologia" className={`nav-link ${styles.categoria}`} >Ecología</a>
                                    </Link>
                                </li>

                                <li className={`nav-item ${styles.navItem}`}>
                                    <Link href="/guias">
                                        <a href="/guias" className={`nav-link ${styles.categoria}`} >Guías</a>
                                    </Link>
                                </li>

                                <li className={`nav-item ${styles.navItem}`}>
                                    <Link href="/autores">
                                        <a href="/autores" className={`nav-link ${styles.categoria}`} >Autores</a>
                                    </Link>
                                </li>

                                <a className={` py-0 align-items-center ${styles.botonBocas}`} role="button" rel="noopener noreferrer" target="_blank" href="https://www.bocas.com.ar/?utm_source=Blog&utm_campaign=Blog">Visitá la Tienda</a>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-xl-1 order-3 mx-0 px-0">
                    <div className="row w-100 justify-content-end align-items-center mx-0 my-1">

                        <Link href="/busqueda">
                            <a className="mx-4" href="/busqueda" style={{ fontSize: "1rem" }}>
                                <i className={`fas fa-search ${styles.icono}`} alt={"busqueda-bocas-mercado"}></i>
                            </a>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>

            </div>
        </nav >
    )
}