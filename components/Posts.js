import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

function Card({ post }) {
    return (
        <div className="card" style={{ border: "0px", paddingBottom: "1rem" }} >
            <div className="card-body p-0" >
                <div className="row justify-content-center m-0">
                    <div className="col-12 col-lg-6" style={{ padding: "0px" }}>

                        <div className="row justify-content-around mx-0"
                            style={{
                                backgroundImage: `url(/${post.imagen})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "20rem"
                            }}
                            alt={"imagen-post-selecion-editor"}
                        ></div>
                    </div>

                    <div className="col-12 col-lg-6" style={{ padding: "50px", backgroundColor: "#f8f9fa", color: "black", height: "20rem" }}>
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

function PostsComponent({ posts }) {
    return (

        <div className="row" style={{ width: "80%" }} >
            <div className="col px-0 py-4">
                <h1>Posts</h1>

                {posts.map((p, i) =>
                    <Card post={p} key={i} />
                )
                }
            </div>
        </div>

    )
}

export default PostsComponent