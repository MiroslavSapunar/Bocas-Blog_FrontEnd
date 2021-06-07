import Image from 'next/image'
import Link from 'next/link'

import { url } from '../../utils/rest'

import styles from './Links.module.scss'

function LinkComponent({ c }) {
    return (
        <Link href={`/${c.url}`}>
            <a href={`/${c.url}`} className={`${styles.link}`}>{`${c.categoria} `}</a>
        </Link>
    )
}

export default function Info({ noticia }) {

    let url_image = url.strapi_url_base + noticia.imagenes[0].url
    if (noticia.imagenes[0].formats?.small) {
        url_image = url.strapi_url_base + noticia.imagenes[0].formats.small.url
    }
    // let url_image = url.strapi_url_base_server_image + noticia.imagenes[0].url

    // if (noticia.imagenes[0].formats?.small) {
    //     url_image = url.strapi_url_base_server_image + noticia.imagenes[0].formats.small.url
    // }

    return (
        <div className="card " style={{ border: "1px", marginBottom: "1rem", minHeight: "11rem" }} >
            <div className="card-body p-0" >
                <div className="row justify-content-betwee p-0 mx-0 ">

                    <div className="col-lg-3  d-none d-lg-block align-items-center px-0 my-auto" style={{ padding: "0px", height: "12rem" }}>
                        {/* <Image
                            src={url_image}
                            layout="fill"
                            alt="imagen noticia"
                            objectFit="cover"
                            priority="true"
                            quality={100}
                        /> */}
                        <img
                            src={url_image}
                            alt="Post destacado"
                            style={{ width: "100%", height: "12rem", objectFit: "cover" }}
                            loading="lazy"
                        />
                    </div>

                    <div className="col-12 col-lg-8 py-1 my-auto" style={{ paddingLeft: "1.5rem", minHeight: "100%" }}>

                        <div className="row px-0 mx-0 py-0" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                            <Link href={`/posts/${noticia.seo_url}`}>
                                <a href={`/posts/${noticia.seo_url}`} className={`${styles.link}`}>
                                    <h5 className="card-title">{noticia.titulo}</h5>
                                </a>
                            </Link>
                        </div>

                        <div className="row px-0 mx-0">
                            <p className="card-text" style={{ fontSize: "0.8rem", lineHeight: "1rem", paddingBottom: "0.5rem", color: "grey", textAlign: "justify" }}>{noticia.resumen}</p>
                        </div>

                        <div className="row px-0 mx-0">
                            <span style={{ fontWeight: "400", fontSize: "0.85rem", lineHeight: "0.9rem" }} className="d-block m-0">
                                <Link href={`/autores/${noticia.autor.seo_url}`}>
                                    <a href={`/autores/${noticia.autor.seo_url}`} className={`${styles.link}`}>{noticia.autor.nombre}</a>
                                </Link>
                                <span style={{ color: "grey" }}>{` en `}</span>
                                {
                                    noticia.categorias.map((c, i) =>
                                        <LinkComponent c={c} key={i} />
                                    )
                                }
                            </span>
                        </div>

                        <div className="row px-0 mx-0">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em", color: "grey" }} className="date-read m-0">
                                {noticia.fecha.split("-").reverse().join("-")}
                                <span className="mx-1">•</span> {`${noticia.tiempo_lectura} min`} <span className="icon-star2"></span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}