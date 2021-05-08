import Home from '../components/Home/Home'
import { url_build } from '../utils/rest'

export default function Root({ destacados, noticias, trending }) {
  return (
    <Home destacados={destacados} noticias={noticias} trending={trending} />
  )
}

export async function getStaticProps(context) {

  const [resDestacados, resNoticias, resTrending] = await Promise.all([
    fetch(url_build.strapi_url_destacados),
    fetch(url_build.strapi_url_noticias),
    fetch(url_build.strapi_url_trending)
  ])

  const [destacados, noticias, trending] = await Promise.all([
    resDestacados.json(),
    resNoticias.json(),
    resTrending.json()
  ])

  if (!destacados || !noticias || !trending) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      destacados,
      noticias,
      trending
    }, // will be passed to the page component as props
  }
}
