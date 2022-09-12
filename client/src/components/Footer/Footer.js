import "./Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="down row">
                    <div className="text-start col">
                        <div>
                            <h5>Contact Us</h5>
                            <div className="my-4">
                                <h6>Address</h6>
                                <p>Londoni Road, Subidbazar, Sylhet</p>
                            </div>
                            <div className="my-4">
                                <h6>Email Us</h6>
                                <p>coderstrio@email.com</p>
                            </div>
                            <div className="my-4">
                                <h6>Call Us</h6>
                                <p>(+880)1765320204</p>
                            </div>
                        </div>
                    </div>
                    <div className="col text-start">
                        <div>
                            <h5 className="mb-4" >Latest News</h5>
                            <p>Become an Affiliate</p>
                            <p>About Cycle</p>
                            <p>New Products</p>
                            <p>Our Team</p>
                        </div>
                    </div>
                    <div className="col text-start">
                        <div>
                            <h5 className="mb-4" >Our Services</h5>
                            <p>About Us</p>
                            <p>Testimonials</p>
                            <p>Products</p>
                            <p>Our Team</p>
                        </div>
                    </div>

                    <div className="col">
                        <p>Explore the intuitive Experience</p>
                        <h6>Coder's Trio</h6>
                        <div className="socials">
                            <a target="_blank" href="www">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a target="_blank" href="www">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a target="_blank" href="www">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="copyright">
                    <small>
                        ©Copyright 2022, Coder's Trio, Sylhet .All right reserved
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;