import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

function Card({ post }) {
    return (
        <div className="card py-2" style={{ border: "0px" }} >
            <div className="card-body p-0" >
                <div className="col align-items-stretch">
                    <div className="row justify-content-around"
                        style={{
                            backgroundImage: `url(/${post.imagen})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            minHeight: "14rem"
                        }}
                    >
                        <div className="col"></div>
                        <div className="col-6" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                            <div className="row">
                                <div className="col ">
                                    <Link href={`/posts/${post.url}`}>
                                        <a href={`/posts/${post.url}`} style={{ textDecoration: "none" }}>
                                            <h5 className="card-title " style={{ fontWeight:"bold" }}>{post.titulo}</h5>
                                        </a>
                                    </Link>
                                </div>
                                <div className="col">
                                    <p className="card-text" style={{ textAlign: "end" }}>{post.fecha_display}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <p className="card-text">{`escrito por `+post.autor}</p>
                                </div>
                            </div>

                            <div className="row py-2">
                                <div className="col">
                                    <p className="card-text">{post.resumen}</p>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col">
                                    <p className="card-text" style={{ fontWeight: "bolder" }}>{post.categorias.join(", ")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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