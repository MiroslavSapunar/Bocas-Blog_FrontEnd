import PostsComponent from '../../components/Posts'

import { url_build } from '../../utils/rest'

export default function Posts({ posts, params }) {
  return (
    <PostsComponent posts={posts} />
  )
}

export async function getServerSideProps(context) {

  const resPost = await fetch(url_build.strapi_url_destacados)
  const posts = await resPost.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,

    }, // will be passed to the page component as props
  }
}