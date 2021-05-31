import PostComponent from '../../components/Posts/Post'
import { url_build } from '../../utils/rest'

async function actualizar_contador_visitas({ vistas, id }) {

    const res = await fetch(`http://dev.api.blog.paginamiro.com.ar:1337/posts/${id}`, {
        body: JSON.stringify({
            vistas: vistas + 1
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `+process.env.NEXT_PUBLIC_ADMIN_JWT_SECRET,
        },
        method: 'PUT'
    })
}

export default function Post({ post, trending }) {

    actualizar_contador_visitas(post)

    return (
        <PostComponent post={post} trending={trending} />
    )
}

export async function getStaticPaths() {

    const resPost = await fetch(url_build.strapi_url_posts)
    const posts = await resPost.json()

    const paths = posts.map((post) => ({
        params: { seo_url: post.seo_url },
    }))

    return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {

    const resPost = await fetch(url_build.strapi_url_posts)
    const posts = await resPost.json()

    const resTrends = await fetch(url_build.strapi_url_top_trending)
    const trending = await resTrends.json()

    const post = posts.filter(post => post.seo_url === params.seo_url)

    return {
        props: {
            post: post[0],
            trending: trending
        },
        revalidate: 60
    }
}