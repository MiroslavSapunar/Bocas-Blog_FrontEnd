import ContactComponent from '../../components/Contact'

export default function Contacto(posts) {
    return (
        <>
            <ContactComponent />
        </>
    )
}

export async function getStaticProps() {
    //const resPosts = postsJson
    return {
        props: {}
    }
}