import ReactMarkdown from 'react-markdown'

import Trend from '../Home/Trends'

import { url } from '../../utils/rest'
import styles from './Post.module.scss'

function ProductoBocas({ url }) {
    return (
        <div className={`${styles.containerMiniatura}`}>
            <a href={url}>
                <div className={`${styles.miniatura}`}>
                    <embed src={url} frameBorder="0" scrolling="no" />
                </div>
            </a>
        </div>
    )
}

function Post({ post, trending }) {
    let url_image = url.strapi_url_base + post.imagenes[0].url

    if (post.imagenes[0].formats?.large) {
        url_image = url.strapi_url_base + post.imagenes[0].formats.large.url
    }

    return (
        <div className="container-fluid px-0">
            <div style={{ height: "auto" }}>
                <img
                    src={url_image}
                    alt="Post destacado"
                    style={{ width: "100%", height: "20rem", objectFit: "cover" }}
                />
            </div>
            <div className="row justify-content-center mx-0 px-0 py-4">

                <div className="row justify-content-between mx-0" style={{ width: "80%" }}>

                    <div className="col-12 col-lg-8 px-0 align-items-stretch" >
                        <div className="row mx-0 my-1">
                            <h2 className="card-title">{post.titulo}</h2>
                        </div>
                        <div className="row mx-0 my-2">
                            <p className="card-text">{`${post.published_at.split("T")[0].split("-").reverse().join("-")} por ${post.autor.nombre}`}</p>
                        </div>

                        <div className={`${styles.texto}`}>
                            <ReactMarkdown source={post.contenido} style={{ padding: "0", margin: "0" }} />
                        </div>

                        <div className="row mx-0">
                            <span>
                                <span>
                                    {
                                        post.categorias.map((c, i) =>
                                            <a key={i} href={`/${c.categoria} `} style={{ textDecoration: "none", fontWeight: "bold" }}> <span>{`${c.categoria} `}</span> </a>
                                        )
                                    }
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 px-0 py-0 align-items-stretch">
                        <h4 style={{ textDecoration: "underline", fontSize: "1.2rem", marginTop: "1rem" }}>Top Trending</h4>
                        {
                            trending.map((trend, k) => <Trend trend={trend} key={k} index={k + 1} />)
                        }
                    </div>

                    {post.productos.map((p, i) =>
                        < div className="col-12 my-2 mx-0 px-0" key={i}>
                            <a href={`${p.url_bocas_producto}`}>

                                <div className="card">
                                    <embed
                                        title="Producto Bocas"
                                        width="100%"
                                        height="100%"
                                        scrolling="no"
                                        src={`${p.url_bocas_producto}`}
                                        style={{ height: "35rem", objectFit: "cover", pointerEvents: "none"}}
                                    >
                                    </embed>
                                    {/* <img src={p.media_url}  />
                                     */}
                                </div>
                            </a>
                        </div>
                    )}
                </div>


                {/* <div className="row mx-0 px-0 justify-content-center w-75">
                    {post.productos &&
                        post.productos.map((p, i) =>
                            <div className="col-6">
                                <ProductoBocas url={p.url_bocas_producto} key={i} />
                            </div>
                        )
                    }
                </div> */}
            </div >
        </div >
    )
}

export default Post