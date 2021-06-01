function ContactComponent() {

    async function registerUser(event) {
        event.preventDefault()

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/emails`, {
            body: JSON.stringify({
                nombre: event.target.name.value,
                apellido: event.target.surname.value,
                email: event.target.email.value,
                comentario: event.target.message.value
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + process.env.NEXT_PUBLIC_ADMIN_JWT_SECRET,
            },
            method: 'POST'
        }).catch(err => console.log(err))

        console.log(res.status)
    }

    return (

        <div className="row w-75 justify-content-center justify-self-center py-5" >
            <div className="col-lg-12">
                <div className="section-title mb-3">
                    <h1>Bocas Newsletter</h1>
                    <h4>¡No te pierdas de nada, suscribite a nuestro newsletter y mantenete al dia con las mejores notas, recetas y consejos en alimentacion saludable! ;)</h4>
                    <h6>(*) Campos obligatorios</h6>
                </div>
                <form onSubmit={registerUser}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="fname">Nombre *</label>
                            <input type="text" id="name" name="name" className="form-control form-control-lg" required />

                            <label htmlFor="fsurname">Apellido *</label>
                            <input type="text" id="surname" name="surname" className="form-control form-control-lg" required />

                            <label htmlFor="eaddress">Email *</label>
                            <input type="email" id="email" name="email" className="form-control form-control-lg" required />
                            <small id="emailHelp" className="form-text text-muted">Nunca vamos a compartir tu email con terceros, ni solicitar informacion adicional</small>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea name="" id="message" name="message" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                    </div>

                    {/* <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}

                    <div className="row justify-content-center">

                        <input type="submit" value="SUSCRIBIRSE" className="btn btn-outline-dark py-3 px-5" />

                    </div>

                </form>
            </div>

        </div>
    )
}
export default ContactComponent