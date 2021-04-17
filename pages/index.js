import Home from '../components/Home'
import postsJson from  '../public/posts.json'

export default function Root({ posts }) {
  return (
    <Home posts={posts} home={""} />
  )
}

export async function getStaticProps(contex) {
  const resPosts = postsJson
  return {
    props: {
      posts: resPosts
    }
  }
}