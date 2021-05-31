import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import Trend from '../Home/Trends'
import { url } from '../../utils/rest'
import styles from './Post.module.scss'

// function ProductoBocas({ url }) {
//     return (
//         <div className={`${styles.containerMiniatura}`}>
//             <a href={url}>
//                 <div className={`${styles.miniatura}`}>
//                     <embed src={url} frameBorder="0" scrolling="no" />
//                 </div>
//             </a>
//         </div>
//     )
// }

function Post({ post, trending }) {
    let url_image = url.strapi_url_base_server_image + post.imagenes[0].url

    // if (post.imagenes[0].formats?.large) {
    //     url_image = url.strapi_url_base_server_image + post.imagenes[0].formats.large.url
    // }

    return (
        <div className="container-fluid px-0">
            <div style={{ position: "relative", width: "100%", height: "20rem" }} >
                <Image
                    src={url_image}
                    alt="Post destacado"
                    layout="fill"
                    objectFit="cover"
                    priority="true"
                    quality={100}
                />

                {/* <img
                    src={url_image}
                    alt="Post destacado"
                    style={{ width: "100%", height: "20rem", objectFit: "cover" }}
                /> */}
            </div>
            <div className="row justify-content-center mx-0 px-0 py-4">

                <div className="row justify-content-between mx-0" style={{ width: "80%" }}>

                    <div className="col-12 col-lg-8 px-0 align-items-stretch" >
                        <div className="row mx-0 my-2">
                            <h1 className="card-title">{post.titulo}</h1>
                        </div>
                        <div className="row mx-0 mb-2">
                            <p className="card-text" style={{ fontSize: "1.5rem" }}>
                                <span>
                                    {`${post.fecha.split("-").reverse().join("-")}`}
                                </span>
                                <span>
                                    {` por `}
                                </span>
                                <span>
                                    <Link href={`/autores/${post.autor.seo_url}`}>
                                        <a href={`/autores/${post.autor.seo_url}`} className={`${styles.link}`}>
                                            {`${post.autor.nombre}`}
                                        </a>
                                    </Link>
                                </span>
                            </p>
                        </div>

                        <div className={`${styles.texto}`}>
                            <ReactMarkdown source={post.contenido} style={{ padding: "0", margin: "0" }} />
                        </div>

                        <div className="row mx-0">
                            <span>
                                <span>
                                    {
                                        post.categorias.map((c, i) =>
                                            <Link href={`/${c.url} `}>
                                                <a key={i} href={`/${c.url} `} style={{ fontWeight: "bold" }}> <span>{`#${c.categoria} `}</span> </a>
                                            </Link>
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
                </div>
                <div className="row justify-content-between my-4" style={{ width: "80%" }}>
                    {post.productos.map((p, i) =>
                        < div className="col-12 col-md-6 col-lg-4 my-2 px-3" key={i}>
                            <a href={`${p.url_producto_bocas}`}>

                                <div className="card" style={{ heigth: "20rem" }}>
                                    <img
                                        alt={p.nombre}
                                        width="100%"
                                        height="100%"
                                        src={`http://localhost:1337${p.foto.url}`}
                                        style={{ objectFit: "cover", height: "20rem" }}
                                    />
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div >
        </div >
    )
}

export default Post