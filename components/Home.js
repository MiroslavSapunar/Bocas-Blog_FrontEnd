import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

function Card({ post }) {
    return (
        <div className="card" style={{ border: "0px" }} >
            <div className="card-body p-0" >
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">

                        <div className="row justify-content-around"
                            style={{
                                backgroundImage: `url(/${post.imagen})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "20rem"
                            }}
                            alt={"imagen-post-selecion-editor"}
                        >
                        </div>
                    </div>
                    <div className="col-12 col-lg-6" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                        <h5 style={{ color: "gray" }}>Seleccion del Editor</h5>
                        <Link href={`/posts/${post.url}`}>
                            <a href={`/posts/${post.url}`} style={{ textDecoration: "none" }}>
                                <h4 className="card-title">{post.titulo}</h4>
                            </a>
                        </Link>
                        <p className="card-text" style={{ color: "gray", fontWeight: "500" }}>{post.resumen}</p>
                        <div className="row">
                            <div className="col">
                                <p className="card-text" style={{ color: "grey" }}>{post.fecha_display + ` por ` + post.autor}</p>
                                <p className="card-text" style={{ fontWeight: "bolder" }}>{post.categorias.join(", ")}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Carusel({ posts }) {
    return (
        <>
            <div id="Carousel" className="carousel slide w-100" ride="true" data-ride="carousel" >
                <div className="carousel-inner" >
                    {posts.map((post, i) => {
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
                <a className="carousel-control-prev" href="#Carousel" role="button" data-slide="prev" style={{ filter: `invert(100%)`, width: "3%" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"  ></span>
                    <span className="sr-only">Previous</span>
                </a >
                <a className="carousel-control-next" href="#Carousel" role="button" data-slide="next" style={{ filter: `invert(100%)`, width: "3%" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="sr-only">Next</span>
                </a>

            </div >
        </>
    )
}

function Info({ noticia }) {
    return (
        <div className="card py-2" style={{ border: "1px" }} >
            <div className="card-body p-0" >
                <div className="row p-0 mx-0">

                    <div className="col-2">
                        <div className="row justify-content-around"
                            style={{
                                backgroundImage: `url(/${noticia.imagen})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "5rem",
                                width: "5rem"
                            }}
                            alt={"imagen-post-selecion-editor"}
                        >
                        </div>
                    </div>

                    <div className="col">

                        <div className="row" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                            <Link href={`/posts/${noticia.url}`}>
                                <a href={`/posts/${noticia.url}`} style={{ textDecoration: "none" }}>
                                    <h6 className="card-title">{noticia.titulo}</h6>
                                </a>
                            </Link>
                        </div>
                        <div className="row">
                            <p className="card-text">{noticia.fecha_display + ` por ` + noticia.autor}</p>
                        </div>
                        <div className="row">
                            <p className="card-text" style={{ fontWeight: "bolder", fontSize: "1rem" }}>{noticia.categorias.join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Body({ noticias, trending }) {
    return (
        <div className="row justify-content-center align-items-start px-0 py-4 mx-0">
            <div className="col-12 col-lg-6 px-0 py-4 alig-items-start">
                <div className="row mx-0">
                    <h4>Noticias</h4>
                </div>
                {
                    noticias.map((noticia, i) =>

                        <Info key={i + 1} noticia={noticia} />

                    )
                }

            </div>
            <div className="col-12 col-lg-6 px-0 py-4 alig-items-start">
                <div className="row mx-0">
                    <h4>Trending</h4>
                </div>
                {
                    trending.map((trend, i) =>

                        <Info key={i + 1} noticia={trend} />

                    )
                }
            </div>
        </div>
    )
}

export default function Home({ posts, home }) {
    return (
        <div className="row" style={{ width: "80%" }} >
            <div className="col px-0 py-4">
                <Carusel posts={posts.filter(p => p.seleccion_editor)} />
                <Body noticias={posts.slice(3, 4)} trending={posts.slice(1, 4)} />
            </div>
        </div>
    )
}