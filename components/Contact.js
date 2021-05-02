function ContactComponent() {
    return (

        <div className="row w-75 justify-content-center justify-self-center py-5" >
            <div className="col-lg-12">
                <div className="section-title mb-5">
                    <h2>Contacto</h2>
                    <h5>¿Tenés alguna duda o consulta? Escribinos a holabocas@gmail.com o contactate a través de Instagram!</h5>
                    <h5>5491136599170</h5>
                    <h5>holabocas@gmail.com</h5>
                </div>
                <form method="post">

                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="fname">Nombre</label>
                            <input type="text" id="fname" className="form-control form-control-lg" />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="lname">Apellido</label>
                            <input type="text" id="lname" className="form-control form-control-lg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="eaddress">Email</label>
                            <input type="text" id="eaddress" className="form-control form-control-lg" />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="tel">Telefono</label>
                            <input type="text" id="tel" className="form-control form-control-lg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <input type="submit" value="¡Próximamente!" className="btn btn-dark py-3 px-5" disabled />
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}
export default ContactComponent