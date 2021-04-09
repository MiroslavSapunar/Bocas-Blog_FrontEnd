import PostsComponent from '../../components/Posts'
import postsJson from '../../public/posts.json'

export default function Posts({ posts, params }) {
    return (
        <>
            <PostsComponent posts={posts} />
        </>
    )
}

export async function getStaticProps(params) {
    const resPosts = postsJson
    return {
        props: {
            posts: resPosts
        }
    }
}