import PostsComponent from '../../components/Posts/Posts'

import { url_build } from '../../utils/rest'

export default function Posts({ posts, filtro }) {

  return (
    <PostsComponent posts={posts} />
  )
}

export async function getStaticProps(context) {
  console.log(Object.keys( context.query )[ 0 ])

  const resPost = await fetch(url_build.strapi_url_posts)
  const posts = await resPost.json()

  const filtro = "hola"

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
      filtro,

    }, // will be passed to the page component as props
  }
}