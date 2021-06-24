import BibliotecaComponent from '../../components/Biblioteca'

import { url_build } from '../../utils/rest'

export default function Novedades({ biblioteca, trending }) {

  return (
    <BibliotecaComponent biblioteca={biblioteca} trending={trending} />
  )
}

export async function getStaticProps(context) {

  const resBiblioteca = await fetch(url_build.strapi_url_biblioteca)
  const biblioteca = await resBiblioteca.json()

  const resTrends = await fetch(url_build.strapi_url_top_trending)
  const trending = await resTrends.json()

  if (!biblioteca) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      biblioteca: biblioteca,
      trending: trending
    },
    revalidate: 60
  }
}