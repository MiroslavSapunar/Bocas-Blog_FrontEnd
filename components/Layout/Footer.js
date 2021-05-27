import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {

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