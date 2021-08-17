import PostsComponent from '../../components/Posts/Posts'

import { url_build } from '../../utils/rest'

export default function Novedades({ posts }) {

  return (
    <PostsComponent categoria={"Novedades"} posts={posts} />
  )
}

export async function getStaticProps(context) {

  const resCategoria = await fetch(url_build.strapi_url_novedades)
  const categoria = await resCategoria.json()

  if (!categoria) {
    return {
      notFound: true,
    }
  } 

  return {
    props: {
      posts:categoria
    },
    revalidate: 3600
  }
}