import { useState } from "react"

function ContactComponent() {

    const [exito, setExito] = useState(false)
    const [error, setError] = useState(false)

    async function registerUser(event) {
        event.preventDefault()

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/emails`, {
            body: JSON.stringify({
                nombre: event.target.name.value,
                apellido: event.target.surname.value,
                email: event.target.email.value,
                comentario: ""
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + process.env.NEXT_PUBLIC_STRAPI_API_KEY,
            },
            method: 'POST'
        })
            .then(res => {
                if (res.status == 200) {
                    setExito(true)
                    setError(false)
                } else {
                    setExito(false)
                    setError(true)
                    //console.log(res)
                }
            })
            .catch(err => console.log(err))
    }

    const Formulario = () => (

        <form onSubmit={registerUser}>
            <h4>¡No te pierdas de nada, suscribite a nuestro newsletter y mantenete al dia con las mejores notas, recetas y consejos en alimentacion saludable!</h4>
            <h6>(*) Campos obligatorios</h6>
            <div className="row">
                <div className="col-md-12 form-group">
                    <label style={{ marginBlock: ".75rem" }} htmlFor="fname">Nombre *</label>
                    <input type="text" id="name" name="name" className="form-control form-control-lg" required />

                    <label style={{ marginBlock: ".75rem" }} htmlFor="fsurname">Apellido *</label>
                    <input type="text" id="surname" name="surname" className="form-control form-control-lg" required />

                    <label style={{ marginBlock: ".75rem" }} htmlFor="eaddress">Email *</label>
                    <input type="email" id="email" name="email" className="form-control form-control-lg" required />
                    <small id="emailHelp" className="form-text text-muted">Nunca vamos a compartir tu email con terceros, ni solicitar informacion adicional</small>

                </div>
            </div>

            {/* <div className="row">
                <div className="col-md-12 form-group">
                    <label style={{ marginBlock: ".75rem" }} htmlFor="message">Mensaje</label>
                    <textarea maxlength="400" name="" id="message" name="message" cols="30" rows="3" className="form-control"></textarea>
                </div>
            </div> */}

            <div className="row justify-content-center">
                <input type="submit" value="SUSCRIBIRSE" style={{ fontFamily: "Lato", fontStyle: "italic" }} className="btn btn-dark py-3 px-5" />
            </div>
        </form>
    )


    return (

        <div className="row w-75 justify-content-center justify-self-center py-5" style={{ minHeight: "79vh" }}>
            <div className="col-lg-12">
                <div className="section-title mb-3">
                    <h1>Bocas Newsletter</h1>
                </div>

                {error &&
                    <div class="alert alert-danger my-3" role="alert">
                        El email proporcionado ya esta registrado
                    </div>
                }

                {!exito &&
                    <Formulario />
                }

                {exito &&
                    <h2>Gracias por suscribirte a nuestro newsletter ;)</h2>
                }

            </div>

        </div>
    )

}
export default ContactComponent