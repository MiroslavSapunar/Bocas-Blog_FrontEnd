import PostsComponent from '../../components/Posts/Posts'

import { url_build } from '../../utils/rest'

export default function Ecologia({ posts }) {

  return (
    <PostsComponent categoria={"Ecología"} posts={posts} />
  )
}

export async function getStaticProps(context) {

  const resCategoria = await fetch(url_build.strapi_url_ecologia)
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