import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

function Card({ post }) {
    return (
        <div className="card" style={{ border: "0px" }} >
            <div className="card-body p-0" >
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6" style={{ padding: "0px" }}>

                        <div className="row justify-content-around"
                            style={{
                                backgroundImage: `url(/${post.imagen})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "21.5rem",
                                margin: "0px"
                            }}
                            alt={"imagen-post-selecion-editor"}
                        ></div>
                    </div>

                    <div className="col-12 col-lg-6" style={{ padding: "50px", backgroundColor: "#f8f9fa", color: "black", height: "21.5rem" }}>
                        {/* <h5 style={{ color: "gray", fontWeight: "400", fontFamily: "Roboto Slab"}}>DESTACADA</h5>
                        */}

                        <div className="row">
                            <Link href={`/posts/${post.url}`}>
                                <a href={`/posts/${post.url}`} style={{ textDecoration: "none" }}>
                                    <h4 className="card-title" style={{ fontSize: " 1.2rem", fontWeight: "500" }}>{post.titulo}</h4>
                                </a>
                            </Link>
                        </div>

                        <div className="row">
                            <p className="card-text mb-3" style={{ color: "gray", fontWeight: "400", fontSize: " .8rem", lineHeight: "1.5em", paddingBottom: "0.5" }}>{post.resumen}</p>
                        </div>

                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} class="d-block m-0"><a href={`/posts?nombre=${post.autor}`}>{post.autor}</a> en <a href={`/posts?categoria=${post.categorias[0]}`}>{post.categorias[0]}</a></span>
                        </div>
                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} class="date-read m-0">{post.fecha_display} <span class="mx-1">•</span> 3 min <span class="icon-star2"></span></span>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}

function Carusel({ posts }) {
    return (
        <>
            <div id="Carousel" className="carousel slide carousel-fade " ride="true" data-ride="carousel" >
                <ol class="carousel-indicators" style={{ bottom: "-6rem" }}>

                    {posts.map((post, i) => {
                        if (i == 0) {
                            return (

                                <li style={{ backgroundColor: "black" }} data-target="#Carousel" data-slide-to={i} key={i} class="active"></li>
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
                <a className="carousel-control-prev" href="#Carousel" role="button" data-slide="prev" style={{ filter: `invert(100%)`, width: "3%", left: "-2rem" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"  ></span>
                    <span className="sr-only">Previous</span>
                </a >
                <a className="carousel-control-next" href="#Carousel" role="button" data-slide="next" style={{ filter: `invert(100%)`, width: "3%", right: "-2rem" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="sr-only">Next</span>
                </a>

            </div >
        </>
    )
}

function Info({ noticia }) {
    return (
        <div className="card align-items-center py-2" style={{ border: "1px" }} >
            <div className="card-body p-0" >
                <div className="row align-items-center p-0 mx-0">

                    <div className="col-md-3  d-none d-md-block align-items-center ">
                        <div className="row justify-content-around"
                            style={{
                                backgroundImage: `url(/${noticia.imagen})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "10rem",
                                width: "10rem"
                            }}
                            alt={"imagen-post-selecion-editor"}
                        >
                        </div>
                    </div>

                    <div className="col-md-8 px-4">

                        <div className="row" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                            <Link href={`/posts/${noticia.url}`}>
                                <a href={`/posts/${noticia.url}`} style={{ textDecoration: "none" }}>
                                    <h6 className="card-title">{noticia.titulo}</h6>
                                </a>
                            </Link>
                        </div>
                        <div className="row">
                            <p className="card-text" style={{ fontSize: ".65rem", paddingBottom: "1rem" }}>{noticia.resumen}</p>
                        </div>
                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} class="d-block m-0"><a href={`/posts?nombre=${noticia.autor}`}>{noticia.autor}</a> en <a href={`/posts?categoria=${noticia.categorias[0]}`}>{noticia.categorias[0]}</a></span>
                        </div>
                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} class="date-read m-0">{noticia.fecha_display} <span class="mx-1">•</span> 3 min <span class="icon-star2"></span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Trent({ trend }) {
    return (
        <div className="card align-items-center py-2" style={{ border: "1px" }} >
            <div className="card-body p-0" >
                <div className="row align-items-center p-0 mx-0">
                    <div className="col-md-8 px-4">

                        <div className="row" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                            <Link href={`/posts/${trend.url}`}>
                                <a href={`/posts/${trend.url}`} style={{ textDecoration: "none" }}>
                                    <h6 className="card-title">{trend.titulo}</h6>
                                </a>
                            </Link>
                        </div>
                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} class="d-block m-0"><a href={`/posts?nombre=${trend.autor}`}>{trend.autor}</a> en <a href={`/posts?categoria=${trend.categorias[0]}`}>{trend.categorias[0]}</a></span>
                        </div>
                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} class="date-read m-0">{trend.fecha_display} <span class="mx-1">•</span> 3 min <span class="icon-star2"></span></span>
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
            <div className="col-12 col-lg-8 px-0 py-4 alig-items-start">
                <div className="row mx-0">
                    <h4 style={{ textDecoration: "underline", fontSize: "1.2rem" }}>Noticias</h4>
                </div>
                {
                    noticias.map((noticia, i) =>

                        <Info key={i + 1} noticia={noticia} />

                    )
                }

            </div>
            <div className="col-12 col-lg-4 px-0 py-4 alig-items-start">
                <div className="row mx-0">
                    <h4 style={{ textDecoration: "underline", fontSize: "1.2rem" }}>Trending</h4>
                </div>
                {
                    trending.map((trend, i) =>

                        <Trent key={i + 1} trend={trend} />

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
                <div style={{ height: "5rem" }}></div>
                <Body noticias={posts.slice(3, 4)} trending={posts.slice(1, 4)} />
            </div>
        </div>
    )
}