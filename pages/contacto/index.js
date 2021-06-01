import ContactComponent from '../../components/Contact'

export default function Contacto() {
    return (
        <>
            <ContactComponent />
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}