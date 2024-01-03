import { Link } from "react-router-dom";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted footer-section">
        <section className="footer-section">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3 pt-3">
              <footer className="text-center text-lg-start text-muted">
                

                <section className="footer-columns">
                  <div className="container text-center text-white text-md-start mt-5">
                    <div className="row mt-3">
                      <div className="col-md-3  mx-auto mb-4">
                        <h3 className="text-uppercase fw-bold mb-4 footer-heading">
                          ED REVIEWS
                        </h3>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.
                        </p>
                      </div>

                      <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase footer-heading fw-bold mb-4 ">Company</h6>
                        <p>
                          <Link to="#!" className="text-reset">
                          About
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          Products 
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          Pricing 
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          Referal Program
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          Career 
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          Press & media
                          </Link>
                        </p>
                      </div>

                      <div className="col-md-2  mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4 footer-heading">
                        Support
                        </h6>
                        <p>
                          <Link to="#!" className="text-reset">
                          Support Portal
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          List of charges
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          Pricing 
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          Referal Program
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          Download Resources
                          </Link>
                        </p>
                        <p>
                          <Link to="#!" className="text-reset">
                          Videos
                          </Link>
                        </p>
                      </div>

                      <div className="col-md-2 col-lg-2 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4 footer-heading">Contact Us</h6>
                        <p className="d-flex align-item-center justify-content-center justify-content-sm-center justify-content-md-start">
                          <i className="fas fa-home me-3 d-flex my-auto"></i> Pakistan, Lyari, Karachi
                        </p>
                        <p className="d-flex align-item-center justify-content-center justify-content-sm-center justify-content-md-start">
                          <i className="fas fa-envelope me-3 d-flex my-auto"></i>info@example.com
                        </p>
                        <p className="d-flex align-item-center justify-content-center justify-content-sm-center justify-content-md-start">
                          <i className="fas fa-phone me-3 d-flex my-auto"></i> + 01 234 567 88
                        </p>
                      </div>

                      <div className="col-md-2 col-lg-2 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4 footer-heading">Contact with us</h6>
                        <div className="d-flex flex-wrap mx-auto align-item-center justify-content-center">
                            <Link to="" className="me-lg-auto mx-md-0 mx-auto text-reset">
                            <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="" className="mx-auto text-reset">
                            <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="" className="mx-auto text-reset">
                            <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to="" className="mx-auto text-reset">
                            <i className="fab fa-linkedin"></i>
                            </Link>
                            <Link to="" className="mx-auto text-reset">
                            <i className="fab fa-github"></i>
                            </Link>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </section>

                <div className="text-center p-4 text-white">
                Developed by:
                  <Link className="text-reset ps-1 fw-bold" to="#">
                    Sharjeel
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
