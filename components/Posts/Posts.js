import Image from 'next/image'
import Link from 'next/link'
import { url_build } from '../../utils/rest'
import styles from "./Posts.module.scss"

function Card({ post }) {
    //console.log(post)

    var url_image = ""

    if (post.imagenes[0].formats?.medium) {
        var url_image = `http://strapi:1337${post.imagenes[0].formats.medium.url}`
    } else {
        var url_image = `http://strapi:1337${post.imagenes[0].url}`
    }

    return (
        <div className={`card ${styles.post}`} style={{ marginBottom: "2rem" }}>
            <div className="card-body p-0" >
                <div className="row justify-content-center mx-0" style={{ minHeight: "15rem" }} >

                    <div className="col-12 col-lg-4" style={{ padding: "0px", minHeight: "15rem", alignItems: "stretch" }}>
                        <Image
                            src={url_image}
                            alt="Post destacado"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className="col-12 col-lg-8" style={{ padding: "2rem", paddingRight: "4rem", color: "black", minHeight: "15rem", alignItems: "stretch" }}>

                        <div className="row mx-0">
                            <Link href={`/posts/${post.seo_url}`}>
                                <a href={`/posts/${post.seo_url}`} style={{ textDecoration: "none" }}>
                                    <h4 className="card-title" style={{ fontSize: " 1.2rem", fontWeight: "500" }}>{post.titulo}</h4>
                                </a>
                            </Link>
                        </div>

                        <div className="row mx-0">
                            <p className="card-text mb-3" style={{ color: "gray", fontWeight: "400", fontSize: " 0.9rem", lineHeight: "1.5em", paddingBottom: "0.5" }}>{post.resumen}</p>
                        </div>

                        <div className="row mx-0" style={{ alignItems: "center" }}>
                            <span style={{ fontWeight: "400", fontSize: "0.85rem", lineHeight: "1rem" }} className="d-block m-0">
                                <a style={{ textDecoration: "none", fontWeight: "bold" }}>{post.autor.nombre}</a>{` en `}
                                {
                                    post.categorias.map((c, i) =>
                                        <a key={i} href={`/${c.categoria} `} style={{ textDecoration: "none", fontWeight: "bold" }}>{`${c.categoria} `} </a>
                                    )
                                }
                            </span>
                        </div>

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
    )
}

function PostsComponent({ posts, categoria }) {
    return (

        <div className="row" style={{ width: "80%" }} >
            <div className="col px-0 py-4">
                <h1>{categoria}</h1>
                {
                    posts.map((p, i) => <Card post={p} key={i} />)
                }
            </div>
        </div>

    )
}

export default PostsComponent