import PostsComponent from '../../components/Posts/Posts'

import { url_build } from '../../utils/rest'

export default function Nutricion({ posts }) {

  return (
    <PostsComponent categoria={"Nutrición"} posts={posts} />
  )
}

export async function getStaticProps(context) {

  const resCategoria = await fetch(url_build.strapi_url_nutricion)
  const categoria = await resCategoria.json()

  if (!categoria) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: categoria
    },
    revalidate: 3600
  }
}