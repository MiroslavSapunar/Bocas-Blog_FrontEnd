
import PostsComponent from '../../components/Posts'
//import styles from '../styles/Home.module.css'

import postsJson from '../../public/posts.json'

export default function Posts({ posts, params }) {
    console.log(params)
    return (
        <>
            <PostsComponent posts={posts} />
        </>
    )
}

export async function getStaticProps(params) {
    console.log(params)
    const resPosts = postsJson
    console.log(resPosts)

    return {
        props: {
            posts: resPosts
        }
    }
}