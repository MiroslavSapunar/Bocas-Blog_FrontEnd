import Link from 'next/link'
import Image from 'next/image'

import { url } from '../utils/rest'
import styles from "./Home.module.scss"

function Card({ post }) {
    var url_image = ""

    if (post.imagenes[0].formats?.medium) {
        var url_image = `http://strapi:1337${post.imagenes[0].formats.medium.url}`
    } else {
        var url_image = `http://strapi:1337${post.imagenes[0].url}`
    }

    return (
        <div className={`card ${styles.cardCustom}`} >
            <div className="card-body p-0" >
                <div className="row justify-content-center" style={{ minHeight: "20rem" }} >

                    <div className="col-12 col-lg-6" style={{ padding: "0px", minHeight: "20rem", alignItems: "stretch" }}>
                        <Image
                            src={url_image}
                            alt="Post destacado"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className="col-12 col-lg-6" style={{ padding: "2rem", paddingRight: "4rem", backgroundColor: "#f8f9fa", color: "black", minHeight: "20rem", alignItems: "stretch" }}>

                        <div className="row mx-0">
                            <Link href={`/posts/${post.seo_url}`}>
                                <a href={`/posts/${post.seo_url}`} style={{ textDecoration: "none" }}>
                                    <h4 className="card-title" style={{ fontSize: " 1.2rem", fontWeight: "500" }}>{post.titulo}</h4>
                                </a>
                            </Link>
                        </div>

                        <div className="row mx-0">
                            <p className="card-text mb-3" style={{ color: "gray", fontWeight: "400", fontSize: " 1rem", lineHeight: "1.5em", paddingBottom: "0.5" }}>{post.resumen}</p>
                        </div>

                        <div className="row mx-0" style={{ alignItems: "center" }}>
                            <span style={{ fontWeight: "400", fontSize: "0.9rem", lineHeight: "1.5em" }} className="d-block m-0">
                                <a href={`/posts?nombre=${post.autor.nombre}`}>{post.autor.nombre}</a>{` en `}
                                {
                                    post.categorias.map((c, i) =>
                                        <a key={i} href={`/posts?categoria=${c.categoria} `}>{`${c.categoria} `} </a>
                                    )
                                }
                            </span>
                        </div>

                        <div className="row mx-0">
                            <span style={{ fontWeight: "400", fontSize: "0.9rem", lineHeight: "1.5em" }} className="date-read m-0">
                                {post.published_at.split("T")[0].split("-").reverse().join("-")}
                                <span className="mx-1">•</span> 3 min <span className="icon-star2"></span>
                            </span>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}

function Carusel({ destacados }) {
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

function Info({ noticia }) {
    const url_image = `http://strapi:1337` + noticia.imagenes[0].formats.small.url
    return (
        <div className="card " style={{ border: "1px", marginBottom: "1rem" }} >
            <div className="card-body p-0" >
                <div className="row justify-content-center p-0 mx-0 ">

                    <div className="col-md-2  d-none d-md-block align-items-center px-0 " syle={{ padding: "0px", height: "100%" }}>
                        <Image
                            src={url_image}
                            alt="Post Noticia"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className="col-12 col-md-10 py-2" style={{ paddingRight: "5rem", paddingLeft: "2rem", minHeight: "9rem" }}>

                        <div className="row px-0 mx-0" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                            <Link href={`/posts/${noticia.seo_url}`}>
                                <a href={`/posts/${noticia.seo_url}`} style={{ textDecoration: "none" }}>
                                    <h6 className="card-title">{noticia.titulo}</h6>
                                </a>
                            </Link>
                        </div>

                        <div className="row px-0 mx-0">
                            <p className="card-text" style={{ fontSize: "0.8rem", paddingBottom: "1rem" }}>{noticia.resumen}</p>
                        </div>

                        <div className="row px-0 mx-0">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} className="d-block m-0">
                                <a href={`/posts?nombre=${noticia.autor.nombre}`}>{noticia.autor.nombre}</a>{` en `}
                                {
                                    noticia.categorias.map(c =>
                                        <a href={`/posts?categoria=${c.categoria} `}>{`${c.categoria} `}</a>
                                    )
                                }
                            </span>
                        </div>

                        <div className="row px-0 mx-0">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} className="date-read m-0">
                                {noticia.published_at.split("T")[0].split("-").reverse().join("-")}
                                <span className="mx-1">•</span> 3 min <span className="icon-star2"></span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function Trend({ trend, index }) {

    return (
        <div className="card align-items-center justify-content-center py-2" style={{ border: "1px" }} >
            <div className="card-body w-100 p-0" >
                <div className="row justify-content-start p-0 mx-0">

                    <div className="col-2  align-items-start p-0">
                        <div style={{ textAlign: "start", height: "30px", width: "50px", fontWeight: "500", fontSize: "30px", lineHeight: "30px", color: "#ccc" }}>
                            {`0${index}`}
                        </div>
                    </div>

                    <div className="col align-items-center">

                        <div className="row" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                            <Link href={`/posts/${trend.seo_url}`}>
                                <a href={`/posts/${trend.seo_url}`} style={{ textDecoration: "none" }}>
                                    <h6 className="card-title" style={{ fontSize: "1rem" }}>{trend.titulo}</h6>
                                </a>
                            </Link>
                        </div>

                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.9rem", lineHeight: "1.5em" }} className="d-block m-0">
                                <a href={`/posts?nombre=${trend.autor.nombre}`}>{trend.autor.nombre}</a>{` en `}
                                {
                                    trend.categorias.map(c =>
                                        <a href={`/posts?categoria=${c.categoria} `}>{`${c.categoria} `}</a>
                                    )
                                }
                            </span>
                        </div>

                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.9rem", lineHeight: "1.5em" }} className="date-read m-0">{trend.published_at.split("T")[0].split("-").reverse().join("-")} <span className="mx-1">•</span> 3 min <span className="icon-star2"></span></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function Body({ noticias, trending }) {

    return (
        <div className="row justify-content-center align-items-start px-0 py-4 mx-0 my-3">
            <div className="col-12 col-lg-8 px-0 py-4 alig-items-start">
                <div className="row justify-content-start mx-0">
                    <h4 style={{ textDecoration: "underline", fontSize: "1.2rem" }}>Noticias</h4>
                </div>
                {
                    noticias.map((noticia, k) => <Info noticia={noticia} key={k} />)
                }

            </div>
            <div className="col-12 col-lg-4 px-2 py-4 alig-items-start">
                <div className="row justify-content-start mx-0">
                    <h4 style={{ textDecoration: "underline", fontSize: "1.2rem" }}>Trending</h4>
                </div>
                {
                    trending.map((trend, k) => <Trend trend={trend} key={k} index={k + 1} />)
                }
            </div>
        </div>
    )
}

export default function Home({ destacados, noticias, trending }) {
    return (
        <div className="row" style={{ width: "80%" }} >
            <div className="col px-0 py-4">
                <Carusel destacados={destacados} />
                <div style={{ height: "1rem" }}></div>
                <Body noticias={noticias} trending={trending} />
            </div>
        </div>
    )
}