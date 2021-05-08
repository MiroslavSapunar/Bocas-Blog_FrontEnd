import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import { url } from '../../utils/rest'
import styles from './Post.module.scss'

function ProductoBocas({ url }) {
    return (
        <div className={`${styles.containerMiniatura}`}>
            <a href={url}>
                <div className={`${styles.miniatura}`}>
                    <iframe src={url} frameBorder="0" scrolling="no" ></iframe>
                </div>
            </a>
        </div>
    )
}

function Post({ post }) {
    console.log(url_image = url.strapi_url_base + post.imagenes[0].url)

    var url_image = url.strapi_url_base + post.imagenes[0].url

    if (post.imagenes[0].formats?.large) {
        var url_image = url.strapi_url_base + `${post.imagenes[0].formats.large.url}`
    }

    return (
        <div className="container-fluid px-0">
            <div style={{ height: "15rem" }}>
                <Image
                    src={url_image}
                    alt="Post destacado"
                    layout="responsive"
                    objectFit="cover"
                    height="15"
                    width="100"
                />
            </div>
            <div className="row justify-content-center mx-0 px-0 py-4">

                <div className="row justify-content-center mx-0" style={{ width: "75%" }}>

                    <div className="col-12 px-0 align-items-stretch">
                        <div className="row mx-0">
                            <h3 className="card-title">{post.titulo}</h3>
                        </div>
                        <div className="row mx-0">
                            <p className="card-text">{`${post.published_at.split("T")[0].split("-").reverse().join("-")} por ${post.autor.nombre}`}</p>
                        </div>
                        <div className="row mx-0">
                            {
                                post.categorias.map((c, i) =>
                                    <a key={i} href={`/posts?categoria=${c.categoria} `} style={{ textDecoration: "none", fontWeight: "bold" }}>{`${c.categoria} `} </a>
                                )
                            }
                        </div>
                        <ReactMarkdown source={post.contenido} style={{ padding: "0", margin: "0" }} />
                    </div>

                </div>

                <div className="row mx-0 px-0 justify-content-center w-75">
                    {post.productos &&
                        post.productos.map((p, i) =>
                            <div className="col-6">
                                <ProductoBocas url={p.url_bocas_producto} key={i} />
                            </div>
                        )
                    }
                </div>
            </div >
        </div >
    )
}

export default Post