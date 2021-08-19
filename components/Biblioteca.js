import Link from 'next/link'
import { useState } from 'react'

import Trend from '../components/Home/Trends'
import { url } from '../utils/rest'

function Guia({ guia }) {

    let url_guia = url.strapi_url_base + guia.pdf.url
    return (
        <div className="card">
            <div className="card-body">
                <div className="row ">
                    <div className="col" >
                        <a href={`${url_guia}`}>
                            <img src={url.strapi_url_base + guia.portada_guia.url}
                                alt="postada guia"
                                style={{ width: "100%", height: "auto", width: "100%", objectFit: "cover" }}
                                loading="lazy"

                            />
                        </a>
                        {/* <h5 className="card-title">{guia.nombre_pdf}</h5> */}
                        <p className="card-text">{guia.resumen_guia}</p>
                        <a href={`${url_guia}`} rel="noopener noreferrer" target="_blank" className="btn btn-primary">Descarga la guía</a>

                    </div>
                </div>
            </div>
        </div >
    )
}



function BibliotecaComponent({ biblioteca, trending }) {

    const [modalState, setState] = useState(true)
    const [error, setError] = useState(false)

    function PopUp({ modalState, setState }) {

        async function registerUser(event) {
            event.preventDefault()

            const res = await fetch(url.strapi_url_busqueda_email(event.target.email.value), {
                headers: {
                    'Authorization': `Bearer ` + process.env.NEXT_PUBLIC_STRAPI_API_KEY,
                },
                method: 'GET'
            })
                .catch(err => console.log(err))

            const response = await res.json()

            if (response > 0) {
                setState(false)
            } else {
                setError(true)
            }
        }

        return (
            <div className={"modal fade " + (modalState ? " show d-block" : " d-none")} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Para acceder a esta seccion debes estar suscripto a nuestro Newsletter</p>

                            {error &&
                                <div class="alert alert-danger my-3" role="alert">
                                    El email proporcionado no esta registrado
                                </div>
                            }
                            <form onSubmit={registerUser}>
                                <div className="form-row align-items-center">
                                    <div className="col-9">

                                        <input type="email" id="email" placeholder="email" name="email" className="form-control form-control-lg" required />
                                    </div>
                                    <div className="col-3">

                                        <input type="submit" value="Ingresar" style={{ fontFamily: "Lato", fontStyle: "italic" }} className="btn btn-dark" />
                                    </div>

                                </div>
                            </form>


                        </div>
                        <div className="modal-footer">
                            <Link href="/contacto">
                                <a href="/contacto" className="btn btn-primary" role="button">suscribite a nuestro Newsletter</a>
                            </Link>
                            <Link href="/">
                                <a href="/" className="btn btn-dark" role="button">volver al Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="row justify-content-center justify-self-center py-5" style={{ width: "80%", minHeight: "79vh" }}>
                <PopUp modalState={modalState} setState={setState} />

                <div className="col-12 col-lg-9 mx-0 px-0">
                    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                        Launch static backdrop modal
                    </button> */}
                    <h1>{biblioteca.titulo}</h1>
                    <p>{biblioteca.cuerpo_texto}</p>
                    <div className="row justify-content-center mx-auto">

                        {
                            biblioteca.guia.map((g, i) =>
                                <div className="col-12 col-xl-5 py-3">
                                    <Guia key={i} guia={g} />
                                </div>
                            )
                        }
                    </div>
                </div>
                
                <div className="col-12 col-lg-3 px-0 py-0 align-items-stretch">
                    <h4 style={{ textDecoration: "underline", fontSize: "1.2rem", marginTop: "1rem" }}>Top Trending</h4>
                    {
                        trending.map((trend, k) => <Trend trend={trend} key={k} index={k + 1} />)
                    }
                </div>

            </div>
        </>
    )

}
export default BibliotecaComponent