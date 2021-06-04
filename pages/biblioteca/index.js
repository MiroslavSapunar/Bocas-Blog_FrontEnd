import BibliotecaComponent from '../../components/Biblioteca'

import { url_build } from '../../utils/rest'

export default function Novedades({ biblioteca }) {

  return (
    <BibliotecaComponent biblioteca={biblioteca} />
  )
}

export async function getStaticProps(context) {

  const resBiblioteca = await fetch(url_build.strapi_url_biblioteca)
  const biblioteca = await resBiblioteca.json()

  if (!biblioteca) {
    return {
      notFound: true,
    }
  } 

  return {
    props: {
      biblioteca:biblioteca
    },
    revalidate: 60
  }
}