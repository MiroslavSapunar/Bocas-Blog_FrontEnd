import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

function Card({ post }) {
    return (
        <div className="card" style={{ border: "0px" }} >
            <div className="card-body p-0" >
                <div className="row justify-content-center">
                    <div className="col align-items-stretch">
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

                            <div className="col"></div>
                            <div className="col-6" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                                <Link href={`/posts/${post.url}`}>
                                    <a href={`/posts/${post.url}`}>
                                        <h5 className="card-title">{post.titulo}</h5>
                                    </a>
                                </Link>
                                <p className="card-text">{post.fecha}</p>
                                <p className="card-text" style={{ fontWeight: "bolder" }}>{post.categoria}</p>
                                <p className="card-text">{post.resumen}</p>
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
    )
}

function Body({ home }) {
    return (
        <div className="col px-0">
            <ReactMarkdown source={home} />
        </div>
    )
}

export default function Home({ posts, home }) {
    return (


        <div className="row" style={{ width: "80%" }} >
            <div className="col px-0 py-4">
                <Carusel posts={posts} />
                <Body home={home} />
            </div>
        </div>
    )
}