import AutorComponent from '../../components/Autores/Autor'
import { url_build } from '../../utils/rest'

function Autor({ autor }) {

    return (
        <AutorComponent autor={autor} />
    )
}

export async function getStaticPaths() {

    const resAutores = await fetch(url_build.strapi_url_autores)
    const autores = await resAutores.json()

    const paths = autores.map((autor) => ({
        params: { seo_url: autor.seo_url },
    }))

    return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
    const resAutor = await fetch(url_build.strapi_url_autor(params.seo_url))
    const autor = await resAutor.json()
    console.log(autor)

    return {
        props: {
            autor: autor[0]
        },
        revalidate: 3600
    }
}

export default Autor