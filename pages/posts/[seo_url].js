import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import { url_build } from '../../utils/rest'

function Post({ post }) {

    var url_image = `http://strapi:1337${post.imagenes[0].url}`

    if (post.imagenes[0].formats?.large) {
        var url_image = `http://strapi:1337${post.imagenes[0].formats.large.url}`
    }

    return (
        <div className="container-fluid px-0">
            <div style={{height:"15rem"}}>
                <Image
                    src={url_image}
                    alt="Post destacado"
                    layout="responsive"
                    objectFit="cover"
                    height="15"
                    width="100"
                />
            </div>
            <div className="row justify-content-center mx-0 px-0 py-4">

                <div className="row justify-content-center mx-0" style={{ width: "75%" }}>

                    <div className="col px-0 align-items-stretch">
                        <div className="row mx-0">
                            <h3 className="card-title">{post.titulo}</h3>
                        </div>
                        <div className="row mx-0">
                            <p className="card-text">{`${post.published_at.split("T")[0].split("-").reverse().join("-")} por ${post.autor.nombre}`}</p>
                        </div>
                        <div className="row mx-0">
                            {
                                post.categorias.map((c, i) =>
                                    <a key={i} href={`/posts?categoria=${c.categoria} `} style={{ textDecoration: "none", fontWeight: "bold" }}>{`${c.categoria} `} </a>
                                )
                            }
                        </div>
                        <ReactMarkdown source={post.contenido} style={{ padding: "0", margin: "0" }} />
                    </div>

                </div>
                <iframe src="https://www.bocas.com.ar/productos/mix-estrella/?variant=194370736" height="1000" width="75%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>
            </div >

        </div >
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    //const res = await fetch('https://.../posts')
    //const posts = await res.json()

    const resPost = await fetch(url_build.strapi_url_destacados)
    const posts = await resPost.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { seo_url: post.seo_url },
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

    const resPost = await fetch(url_build.strapi_url_destacados)
    const posts = await resPost.json()

    const post = posts.filter(post => post.seo_url === params.seo_url)

    // Pass post data to the page via props
    return { props: { post: post[0] } }
}

export default Post