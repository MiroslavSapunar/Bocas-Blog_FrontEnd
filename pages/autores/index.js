import AutoresComponent from '../../components/Autores/Autores'

import { url_build } from '../../utils/rest'

export default function Posts({ autores }) {

  return (
    <AutoresComponent autores={autores} />
  )
}

export async function getStaticProps(context) {

  const resAutores = await fetch(url_build.strapi_url_autores)
  const autores = await resAutores.json()

  if (!autores) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      autores,
    },
    revalidate: 60
  }
}