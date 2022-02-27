import React from "react";

const Contact = () => {
    return (
        <>
            <div className="container-fluid bg-primary py-5">
                <div className="col-md-6 m-auto text-center text-white">
                    <h1 className="h1">Contact Us</h1>
                    <p>
                        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div className="container-fluid mt-0 p-0">
                <div className="row">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d80681.844740497!2d105.76744384391506!3d21.05137087071539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1645977730721!5m2!1svi!2s" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" role="form">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputname">Name</label>
                                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputsubject">Subject</label>
                            <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Subject" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputmessage">Message</label>
                            <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="button" className="btn btn-success btn-lg px-3">Let’s Talk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact;