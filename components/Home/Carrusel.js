import Link from 'next/link'
import Image from 'next/image'

import styles from './Carrusel.module.scss'

function Card({ post }) {
    var url_image = ""

    if (post.imagenes[0].formats?.medium) {
        var url_image = `http://strapi:1337${post.imagenes[0].formats.medium.url}`
    } else {
        var url_image = `http://strapi:1337${post.imagenes[0].url}`
    }

    return (
        <div className={`card ${styles.destacado}`} >
            <div className="card-body" >
                <div className="row justify-content-center">

                    <div className={`col-12 col-lg-6 ${styles.colImage}`}>
                        <Image
                            src={url_image}
                            alt="Post destacado"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className={`col-12 col-lg-6 ${styles.colTexto}`} >

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
                            <span className={`d-block ${styles.meta}`}>
                                <a className={`${styles.linkMeta} `} href={`/posts?nombre=${post.autor.nombre}`} >{post.autor.nombre}</a>
                                <span style={{color: "grey"}}>{` en `}</span>
                                {
                                    post.categorias.map((c, i) =>
                                        <a key={i} href={`/posts?categoria=${c.categoria} `} style={{ textDecoration: "none", fontWeight: "bold" }}>{`${c.categoria} `} </a>
                                    )
                                }
                            </span>
                        </div>

                        <div className={`row ${styles.espacioMeta}`}>
                            <span className={`d-block ${styles.metaSub}`}>
                                {post.published_at.split("T")[0].split("-").reverse().join("-")}
                                <span className="mx-1">•</span> {`${post.tiempo_lectura} min`} <span className="icon-star2"></span>
                            </span>
                        </div>


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