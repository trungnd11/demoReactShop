import React from "react";

const Footer = () => {
    return (
        <footer className="bg-light text-white pt-5 mt-5">
            <div className="container p-4 pb-0">
                <div className="row text-black mb-4">

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-befor">
                        <h5 className="text-uppercase">Footer Content</h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>



                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-black text-decoration-none">Home</a>
                            </li>
                            <li>
                                <a href="#!" className="text-black text-decoration-none">Shop</a>
                            </li>
                            <li>
                                <a href="#!" className="text-black text-decoration-none">About</a>
                            </li>
                            <li>
                                <a href="#!" className="text-black text-decoration-none">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-black text-decoration-none">Men's </a>
                            </li>
                            <li>
                                <a href="#!" className="text-black text-decoration-none">Women's </a>
                            </li>
                            <li>
                                <a href="#!" className="text-black text-decoration-none">Jewelery </a>
                            </li>
                            <li>
                                <a href="#!" className="text-black text-decoration-none">Electronic </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="mb-4 text-center">

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        role="button"
                    ><i className="fa fa-facebook-f"></i
                    ></a>


                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#55acee" }}
                        href="#!"
                        role="button"
                    ><i className="fa fa-twitter"></i
                    ></a>


                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="#!"
                        role="button"
                    ><i className="fa fa-google"></i
                    ></a>

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#ac2bac" }}
                        href="#!"
                        role="button"
                    ><i className="fa fa-instagram"></i
                    ></a>

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#0082ca" }}
                        href="#!"
                        role="button"
                    ><i className="fa fa-linkedin"></i
                    ></a>

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#333333" }}
                        href="#!"
                        role="button"
                    ><i className="fa fa-github"></i
                    ></a>
                </section>

            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer>
    )
}

export default Footer;