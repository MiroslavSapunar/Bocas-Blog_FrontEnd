import PostComponent from '../../components/Posts/Post'
import { url_build } from '../../utils/rest'

function Post({ post, trending }) {

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

    return { props: {post: post[0], trending: trending} }
}

export default Post