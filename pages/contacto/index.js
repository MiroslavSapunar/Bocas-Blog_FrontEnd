
//import Home from '../components/Home'
//import styles from '../styles/Home.module.css'

export default function Contacto(props) {
    return (
        <div className="row w-50 justify-content-center py-5" >
            <div className="col-lg-12">
                <div className="section-title mb-5">
                    <h2>Contact Us</h2>
                </div>
                <form method="post">

                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" className="form-control form-control-lg" />
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" className="form-control form-control-lg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="eaddress">Email Address</label>
                            <input type="text" id="eaddress" className="form-control form-control-lg" />
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="tel">Tel. Number</label>
                            <input type="text" id="tel" className="form-control form-control-lg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label for="message">Message</label>
                            <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}