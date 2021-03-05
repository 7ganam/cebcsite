import React from 'react'
import "./FooterComponent.css"
function FooterComponent() {
    return (
        <div>
            <div className="bottom-wrapper">
                <footer className="footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <aside id="text-22" className="widget widget_text"><h3 className="widget-title">About the CEBC</h3>
                                    <div className="textwidget">
                                        <span className="footer-cebc">
                                            Registered as a Not for Profit Company in Abu Dhabi Global Market (ADGM), the Clean Energy Business Council is the pre-eminent
                                            organization representing the private sector involved in the clean energy sector across the MENA region.
                                            <br /><br />
                                            Our goal is to establish a dialogue between the public and private sectors to drive the development of appropriate and much needed regulation and policy to support the development of this vital sector.
                                            <br />
                                        </span>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-4">
                                <aside id="custom_html-3" className="widget_text widget widget_custom_html">
                                    <div className="textwidget custom-html-widget">
                                        <br /><br /><br />
                                        <center>
                                            <img id='footer_image' src="https://cebcmena.com/wp-content/uploads/2017/12/smaller.png" alt="CEBC logo" width="250" height="150" />
                                        </center>
                                        <br /><br />
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-4">
                                <aside id="text-24" className="widget widget_text">
                                    <h3 className="widget-title">Contact Us</h3>
                                    <div className="textwidget">
                                        <p>
                                            <i className="fa fa-map-marker">  </i>
                                            <span className="footer-contact">Abu Dhabi Global Market (ADGM), Abu Dhabi, U.A.E.</span>
                                        </p>
                                        <p>
                                            <i className="fas fa-envelope"></i>
                                            <span className="footer-contact"><a href="mailto:webmaster@cebcmena.com">webmaster@cebcmena.com</a></span>
                                        </p>

                                        <p>
                                            <i className="fas fa-angle-double-right"></i>

                                            <span className="footer-contact">
                                                <a href="http://www.cebcmena.com/contactus/">You may also contact us using this form</a>
                                            </span>
                                        </p></div>
                                </aside>
                                <div className="social">
                                    <div className="menu-social-profile-links-container">
                                        <section>






                                            <ul id="services">
                                                <li>
                                                    <div className="facebook">
                                                        <a href="https://facebook.com/">
                                                            <i className="fab fa-facebook  i_link" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="twitter">
                                                        <a href="https://twitter.com/">
                                                            <i className="fab fa-twitter i_link" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="youtube">
                                                        <a href="https://www.youtube.com/">
                                                            <i className="fab fa-youtube i_link" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="linkedin">
                                                        <a href="https://www.linkedin.com/">
                                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="instagram">
                                                        <a href="https://www.linkedin.com/">
                                                            <i className="fab fa-instagram i_link" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </li>

                                            </ul>

                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    <div className="container">
                        Copyright 2017 Clean Energy Business Council MENA. Contact the
                        <a href="">webmaster</a>
                        for more details.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent
