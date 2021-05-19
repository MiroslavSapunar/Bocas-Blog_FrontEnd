import Link from 'next/link'
import { url } from '../../utils/rest'
import styles from './Carrusel.module.scss'

function Card({ post }) {

    let url_image = url.strapi_url_base + post.imagenes[0].url

    if (post.imagenes[0].formats?.medium) {
        url_image = url.strapi_url_base + post.imagenes[0].formats.medium.url
    }

    return (
        <div className={`card ${styles.destacado}`} >

            <div className="row justify-content-center h-100">

                <div className={`col-12 col-xl-6 ${styles.colImage}`}>
                    <img className={`${styles.image}`}
                        src={url_image}
                        alt="Post destacado"
                    />
                </div>


                <div className={`col-12 col-xl-6 py-3 my-auto ${styles.colTexto}`} >

                    <div className={`row ${styles.espacioTitulo}`}>
                        <Link href={`/posts/${post.seo_url}`}>
                            <a className={`${styles.link}`} href={`/posts/${post.seo_url}`}>
                                <h3 className={`card-title ${styles.titulo}`} >{post.titulo}</h3>
                            </a>
                        </Link>
                    </div>

                    <div className={`row ${styles.espacioResumen}`}>
                        <p className={`card-text ${styles.resumen}`} >{post.resumen}</p>
                    </div>

                    <div className={`row ${styles.espacioMeta}`}>
                        <span>
                            <span>
                                <Link href={`/autores/${post.autor.seo_url}`}>
                                    <a href={`/autores/${post.autor.seo_url}`} className={`${styles.linkMeta}`}  >{post.autor.nombre}</a>
                                </Link>
                            </span>
                            <span style={{ color: "grey" }}>{` en `}</span>
                            {
                                post.categorias.map((c, i) =>
                                    <span>
                                        <Link href={`/${c.url}`}>
                                            <a key={i} href={`/${c.url}`} className={`${styles.linkMeta}`}>{`${c.categoria} `} </a>
                                        </Link>
                                    </span>
                                )
                            }
                        </span>
                    </div>

                    <div className={`row ${styles.espacioMeta}`}>
                        <span>
                            {post.published_at.split("T")[0].split("-").reverse().join("-")}
                            <span className="mx-1">•</span> {`${post.tiempo_lectura} min`} <span className="icon-star2"></span>
                        </span>
                    </div>


                </div>

            </div>
        </div >
    )
}

export default function Carrusel({ destacados }) {
    return (
        <div id="Carousel" className="carousel slide carousel-fade py-5" ride="true" data-ride="carousel" >
            <ol className="carousel-indicators" style={{ bottom: "-3rem" }}>

                {destacados.map((post, i) => {
                    if (i == 0) {
                        return (
                            <li style={{ backgroundColor: "black" }} data-target="#Carousel" data-slide-to={i} key={i} className="active"></li>
                        )
                    } else {
                        return (
                            <li style={{ backgroundColor: "black" }} data-target="#Carousel" data-slide-to={i} key={i}></li>
                        )
                    }
                })
                }
            </ol>
            <div className="carousel-inner" >
                {destacados.map((post, i) => {
                    if (i == 0) {
                        return (
                            <div className="carousel-item active" key={i}>
                                <Card post={post} />
                            </div>
                        )
                    } else {
                        return (
                            <div className="carousel-item" key={i}>
                                <Card post={post} />
                            </div>
                        )
                    }
                })
                }
            </div>

            <a className="carousel-control-prev" href="#Carousel" role="button" data-slide="prev" style={{ filter: `invert(100%)`, width: "3%", left: "-2rem" }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"  ></span>
                <span className="sr-only">Previous</span>
            </a >
            <a className="carousel-control-next" href="#Carousel" role="button" data-slide="next" style={{ filter: `invert(100%)`, width: "3%", right: "-2rem" }}>
                <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                <span className="sr-only">Next</span>
            </a>

        </div >
    )
}