import Link from 'next/link'
import { url } from '../../utils/rest'

function Card({ autor }) {

    let url_image = url.strapi_url_base + autor.foto.url

    if (autor.foto.formats?.medium) {
        url_image = url.strapi_url_base + autor.foto.formats.medium.url
    }

    return (
        <div className={`card`} style={{ marginBlock: "2rem" }}>
            <div className="card-body p-0" >
                <div className="row justify-content-center align-items-center mx-auto" style={{ minHeight: "12rem" }} >

                    <div className="col-lg-3  d-none d-lg-block" style={{ padding: "0px", height: "100%" }}>
                        <img
                            src={url_image}
                            alt="Post destacado"
                            style={{ width: "100%", height: "12", objectFit: "cover" }}
                        />
                    </div>

                    <div className="col-12 col-lg-9 my-auto py-3" style={{ color: "black", height: "auto", paddingLeft: "3rem", paddingRight: "4rem" }}>
                        <Link href={`/Autores/${autor.seo_url}`}>
                            <a href={`/Autores/${autor.seo_url}`} style={{ textDecoration: "none" }}>

                                <div className="row mx-0">
                                    <h3 className="card-title">{autor.nombre}</h3>
                                </div>

                                <div className="row mx-0">
                                    <p className="card-text mb-3" style={{ color: "gray", fontWeight: "400", fontSize: "auto", lineHeight: "1.5em", paddingBottom: "0.5", textAlign: "justify" }}>{autor.bio}</p>
                                </div>
                            </a>
                        </Link>

                        <div className="row mx-0" style={{ alignItems: "center" }}>
                            <span style={{ fontWeight: "400", fontSize: "1rem", lineHeight: "1rem" }} className="d-block m-0">
                                <a href={autor.link_personal} style={{ textDecoration: "none", fontWeight: "bold" }}>+ info</a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}

function AutoresComponent({ autores }) {
    return (

        <div className="row" style={{ width: "80%", minHeight: "69.5vh" }} >
            <div className="col px-0 py-4">
                <h1>Autores</h1>
                {
                    autores.map((a, i) => <Card autor={a} key={i} />)
                }
            </div>
        </div>

    )
}

export default AutoresComponent