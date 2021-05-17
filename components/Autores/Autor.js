import Link from 'next/link'
import { url } from '../../utils/rest'
import styles from "./Autor.module.scss"

function Card({ post }) {

    let url_image = url.strapi_url_base + post.imagenes[0].url

    if (post.imagenes[0].formats?.medium) {
        url_image = url.strapi_url_base + post.imagenes[0].formats.medium.url
    }

    return (
        <Link href={`/posts/${post.seo_url}`}>
            <a href={`/posts/${post.seo_url}`} style={{ textDecoration: "none" }}>
                <div className={`card ${styles.post}`} style={{ marginBottom: "2rem" }}>
                    <div className="card-body p-0" >
                        <div className="row justify-content-center align-items-center mx-auto" style={{ minHeight: "15rem" }} >

                            <div className="col-lg-2  d-none d-lg-block" style={{ padding: "0px", height: "15rem" }}>
                                <img
                                    src={url_image}
                                    alt="Post destacado"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>

                            <div className="col-12 col-lg-10 pr-2 py-2 my-auto" style={{ color: "black", height: "auto", alignSelf: "center" }}>

                                <div className="row mx-0">

                                    <h4 className="card-title" style={{ fontSize: " 1.2rem", fontWeight: "500", textAlign: "left" }}>{post.titulo}</h4>

                                </div>

                                <div className="row mx-0">
                                    <p className="card-text mb-3" style={{ color: "gray", fontWeight: "400", fontSize: "auto", lineHeight: "1.5em", paddingBottom: "0.5", textAlign: "justify" }}>{post.resumen}</p>
                                </div>

                                {/* <div className="row mx-0" style={{ alignItems: "center" }}>
                            <span style={{ fontWeight: "400", fontSize: "0.85rem", lineHeight: "1rem" }} className="d-block m-0">
                                <a style={{ textDecoration: "none", fontWeight: "bold" }}>{post.autor.nombre}</a>{` en `}
                                {
                                    post.categorias.map((c, i) =>
                                        <a key={i} href={`/${c.categoria} `} style={{ textDecoration: "none", fontWeight: "bold" }}>{`${c.categoria} `} </a>
                                    )
                                }
                            </span>
                        </div> */}

                                <div className="row mx-0">
                                    <span style={{ fontWeight: "400", fontSize: "0.9rem", lineHeight: "1.5em" }} className="date-read m-0">
                                        {post.published_at.split("T")[0].split("-").reverse().join("-")}
                                        <span className="mx-1">•</span> {`${post.tiempo_lectura} min`} <span className="icon-star2"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </a>
        </Link>
    )
}

function AutorComponent({ autor }) {
    return (

        <div className="row" style={{ width: "80%", minHeight: "69.5vh" }} >
            <div className="col px-0 py-4">
                <h1>{`Notas de ${autor.nombre}`}</h1>
                {
                    autor.posts.map((p, i) => <Card post={p} key={i} />)
                }
            </div>
        </div>

    )
}

export default AutorComponent