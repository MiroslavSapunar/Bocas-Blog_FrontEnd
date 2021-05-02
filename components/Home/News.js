import Link from 'next/link'
import Image from 'next/image'

export default function Info({ noticia }) {
    const url_image = `http://strapi:1337` + noticia.imagenes[0].formats.small.url
    return (
        <div className="card " style={{ border: "1px", marginBottom: "1rem" }} >
            <div className="card-body p-0" >
                <div className="row justify-content-center p-0 mx-0 ">

                    <div className="col-md-3  d-none d-md-block align-items-center px-0 " style={{ padding: "0px", minHeight: "12rem" }}>
                        <Image
                            src={url_image}
                            alt="Post Noticia"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className="col-12 col-md-9 py-1" style={{ paddingRight: "5rem", paddingLeft: "1.5rem", minHeight: "100%" }}>

                        <div className="row px-0 mx-0" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                            <Link href={`/posts/${noticia.seo_url}`}>
                                <a href={`/posts/${noticia.seo_url}`} style={{ textDecoration: "none" }}>
                                    <h6 className="card-title">{noticia.titulo}</h6>
                                </a>
                            </Link>
                        </div>

                        <div className="row px-0 mx-0">
                            <p className="card-text" style={{ fontSize: "0.8rem", lineHeight: "1rem", paddingBottom: "1rem" }}>{noticia.resumen}</p>
                        </div>

                        <div className="row px-0 mx-0">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} className="d-block m-0">
                                <a href={`/posts/autor/${noticia.autor.nombre}`} style={{ textDecoration: "none", fontWeight: "bold" }} >{noticia.autor.nombre}</a>{` en `}
                                {
                                    noticia.categorias.map(c =>
                                        <a href={`/posts?categoria=${c.categoria}`} style={{ textDecoration: "none", fontWeight: "bold" }}>{`${c.categoria} `}</a>
                                    )
                                }
                            </span>
                        </div>

                        <div className="row px-0 mx-0">
                            <span style={{ fontWeight: "400", fontSize: "0.8rem", lineHeight: "1.5em" }} className="date-read m-0">
                                {noticia.published_at.split("T")[0].split("-").reverse().join("-")}
                                <span className="mx-1">•</span> {`${noticia.tiempo_lectura} min`} <span className="icon-star2"></span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}