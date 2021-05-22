import Home from '../components/Home/Home'
import { url_build, tokens } from '../utils/rest'

export default function Root({ destacados, noticias, trending, ig }) {
  return (
    <Home destacados={destacados} noticias={noticias} trending={trending} ig={ig} />
  )
}

export async function getStaticProps(context) {

  const [resDestacados, resNoticias, resTrending, resIG] = await Promise.all([
    fetch(url_build.strapi_url_destacados),
    fetch(url_build.strapi_url_noticias),
    fetch(url_build.strapi_url_trending),
    fetch(tokens.instagram_media)
  ])

  const [destacados, noticias, trending, ig] = await Promise.all([
    resDestacados.json(),
    resNoticias.json(),
    resTrending.json(),
    resIG.json()
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
      trending,
      ig: ig.data? ig.data: null
    },
    revalidate: 1 // will be passed to the page component as props
  }
}
