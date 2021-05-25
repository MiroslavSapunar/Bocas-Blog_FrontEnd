import Link from 'next/link'

function LinkComponent({c}) {
    return (
        <Link href={`/${c.url}`} >
            <a href={`/${c.url}`} style={{ textDecoration: "none", fontSize: "0.75rem" }} >{`${c.categoria} `}</a>
        </Link>
    )
}

export default function Trend({ trend, index }) {

    return (
        <div className="card align-items-center justify-content-center py-2" style={{ border: "1px" }} >
            <div className="card-body w-100 p-0" >
                <div className="row justify-content-start p-0 mx-0">

                    <div className="col-2  align-items-start p-0">
                        <div style={{ textAlign: "start", height: "30px", width: "50px", fontWeight: "500", fontSize: "30px", lineHeight: "30px", color: "#ccc" }}>
                            {`0${index}`}
                        </div>
                    </div>

                    <div className="col align-items-center">

                        <div className="row" style={{ color: "black", backgroundColor: `rgb(255, 255, 255, 1)` }}>
                            <Link href={`/posts/${trend.seo_url}`}>
                                <a href={`/posts/${trend.seo_url}`} style={{ textDecoration: "none" }}>
                                    <h6 className="card-title" style={{ fontSize: "1rem", textAlign: "left" }}>{trend.titulo}</h6>
                                </a>
                            </Link>
                        </div>

                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.75rem", lineHeight: "0.9rem" }} className="d-block m-0">
                                <Link href={`/autores/${trend.autor.seo_url}`}>
                                    <a href={`/autores/${trend.autor.seo_url}`} style={{ textDecoration: "none", fontSize: "0.75rem" }}>{trend.autor.nombre}</a>
                                </Link>
                                <span style={{ color: "grey" }}>{` en `}</span>
                                {
                                    trend.categorias.map((c, i) =>
                                        <LinkComponent key={i} c={c} />
                                    )
                                }
                            </span>
                        </div>

                        <div className="row">
                            <span style={{ fontWeight: "400", fontSize: "0.75rem", lineHeight: "1rem", color: "grey" }} className="date-read m-0">{trend.fecha.split("-").reverse().join("-")} <span className="mx-1">•</span> {`${trend.tiempo_lectura} min`} <span className="icon-star2"></span></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}