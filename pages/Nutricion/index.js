import PostsComponent from '../../components/Posts/Posts'

import { url_build } from '../../utils/rest'

export default function Nutricion({ posts }) {

  return (
    <PostsComponent categoria={"Nutrición"} posts={posts} />
  )
}

export async function getServerSideProps(context) {

    const resCategoria = await fetch(url_build.strapi_url_nutricion)
    const categoria = await resCategoria.json()
  
    if (!categoria) {
      return {
        notFound: true,
      }
    }
  
    const posts = await Promise.all(categoria.posts.map(async p => {
      const res = await fetch(url_build.strapi_url_base + `/posts/` + p.id)
      const dataRes = await res.json()
      return dataRes
    }))
    
  
    return {
      props: {
        posts
      }, // will be passed to the page component as props
    }
  }