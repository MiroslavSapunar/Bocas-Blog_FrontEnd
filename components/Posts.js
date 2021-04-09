import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

function Card({ post }) {
    return (
        <div className="card"  >
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
                    <div className="row" style={{ height: "1.25rem", backgroundColor: `rgb(65, 110, 75, 1)` }}></div>
                </div>
            </div>
        </div>
    )
}

function PostsComponent({ posts }) {
    return (
        <div className="container-fluid px-0">
            <div className="row justify-content-center mx-0 px-0">
                <div className="row w-75">
                    <div className="col p-5">
                        <h1>Posts</h1>

                        {posts.map((p, i) =>
                            <Card post={p} key={i} />
                        )
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PostsComponent