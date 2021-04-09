import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

function Card({ post }) {
    return (
        <div className="card py-1" style={{ border: "0px" }} >
            <div className="card-body p-0" >
                <div className="col align-items-stretch">
                    <div className="row justify-content-around"
                        style={{
                            backgroundImage: `url(/${post.imagen})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "14rem"
                        }}
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