import PostComponent from '../../components/Posts/Post'
import { url_build } from '../../utils/rest'

function Post({ post, trending }) {

    return (
        <PostComponent post={post} trending={trending} />
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts

    const resPost = await fetch(url_build.strapi_url_posts)
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

    const resPost = await fetch(url_build.strapi_url_posts)
    const posts = await resPost.json()

    const resTrends = await fetch(url_build.strapi_url_trending)
    const trending = await resTrends.json()



    const post = posts.filter(post => post.seo_url === params.seo_url)

    // Pass post data to the page via props
    return { props: {post: post[0], trending: trending} }
}

export default Post