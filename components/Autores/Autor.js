import Image from 'next/image'
import Link from 'next/link'
import { url } from '../../utils/rest'

import styles from "./Autor.module.scss"

function Card({ post }) {

    let url_image = post.imagenes[0].formats.small ? url.strapi_url_base_server_image + post.imagenes[0].formats.small.url : url.strapi_url_base_server_image + post.imagenes[0].url

    return (
        <div className={`card ${styles.post}`} style={{ marginBottom: "2rem" }}>
            <div className="card-body p-0" >
                <div className="row justify-content-center align-items-center mx-auto" style={{ minHeight: "15rem" }} >

                    <div className="col-lg-3  d-none d-lg-block" style={{ padding: "0px", height: "15rem" }}>
                        <Image
                            src={url_image}
                            alt="imagen post"
                            layout="fill"
                            objectFit="cover"
                            priority="true"
                        />
                    </div>

                    <div className="col-12 col-lg-9 m px-4 py-2 my-auto" style={{ height: "auto", alignSelf: "center" }}>
                        <Link href={`/posts/${post.seo_url}`}>
                            <a href={`/posts/${post.seo_url}`} className={`${styles.link}`}>

                                <div className="row mx-0">
                                    <h4 className="card-title" style={{ fontWeight: "500", textAlign: "left" }}>{post.titulo}</h4>
                                </div>

                                <div className="row mx-0">
                                    <p className="card-text mb-3" style={{ color: "gray", fontWeight: "400", fontSize: "auto", lineHeight: "1.5em", paddingBottom: "0.5", textAlign: "justify" }}>{post.resumen}</p>
                                </div>
                            </a>
                        </Link>

                        <div className="row mx-0" style={{ alignItems: "center", paddingBlock: "0.5rem" }}>
                            <span style={{ fontWeight: "400", fontSize: ".9rem", lineHeight: "1rem" }} className="d-block m-0">
                                <span>
                                    <Link href={`/autores/${post.autor_seo}`}>
                                        <a href={`/autores/${post.autor_seo}`} className={`${styles.linkMeta}`}>{post.autor_nombre}</a>
                                    </Link>
                                </span>
                                <span>
                                    {` en `}
                                </span>
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

                        <div className="row mx-0">
                            <span style={{ fontWeight: "400", fontSize: "0.9rem", lineHeight: "1rem" }} className="date-read m-0">
                                {post.fecha.split("-").reverse().join("-")}
                                <span className="mx-1">???</span> {`${post.tiempo_lectura} min`} <span className="icon-star2"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

function AutorComponent({ autor }) {
    return (

        <div className="row" style={{ width: "80%", minHeight: "69.5vh" }} >
            <div className="col px-0 py-4">
                <h2>Notas de <a href={`${autor.link_personal}`} rel="noopener noreferrer" target="_blank" >{`${autor.nombre}`}</a></h2>
                <p>{autor.bio}</p>
                {
                    autor.posts.map((p, i) => <Card post={p} key={i} />)
                }
            </div>
        </div>

    )
}

export default AutorComponent