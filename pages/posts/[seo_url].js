import Link from 'next/link'
import postsJson from '../../public/posts.json'

function Post({ post }) {
    console.log(post.contenido)
    return (
        <div className="container-fluid px-0">
            <div
                style={{
                    backgroundImage: `url(/${post.imagen})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "20rem"
                }}
                alt={"imagen-post-selecion-editor"}
            ></div>
            <div className="row justify-content-center mx-0 px-0 py-4">

                <div className="row justify-content-center mx-0" style={{ width: "80%" }}>
                    <div className="row">
                        <div className="col align-items-stretch">
                            <div className="row">
                                <h4 className="card-title">{post.titulo}</h4>
                            </div>
                            <div className="row">
                                <p className="card-text">{post.fecha_display + ` por ` + post.autor}</p>
                            </div>
                            <div className="row">
                                <p className="card-text" style={{ fontWeight: "bolder" }}>{`Categorias: ` + post.categorias.join(", ")}</p>
                            </div>

                            <div className="row py-2">
                                {
                                    post.contenido.map(p =>
                                        <p className="card-text">{p}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    //const res = await fetch('https://.../posts')
    //const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = postsJson.map((post) => ({
        params: { seo_url: post.url },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    //const res = await fetch(`https://.../posts/${params.id}`)
    //const post = await res.json()

    const post = postsJson.filter(post => post.url === params.seo_url)

    // Pass post data to the page via props
    return { props: { post: post[0] } }
}

export default Post