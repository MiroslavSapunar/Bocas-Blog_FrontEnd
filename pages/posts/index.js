import PostsComponent from '../../components/Posts/Posts'

import { url_build } from '../../utils/rest'

export default function Posts({ posts }) {

  return (
    <PostsComponent posts={posts} />
  )
}

export async function getStaticProps(context) {

  const resPost = await fetch(url_build.strapi_url_posts)
  const posts = await resPost.json()

  //const filtro = "hola"

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
    },
    revalidate: 60
  }
}