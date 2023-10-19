import React from "react";
import paymentCom from "../assets/pay.png";
import whiteLogo from "../assets/white-logo.png";
import '../styles/Footer.css'

// import footerBgImg from "../assets/footer-back.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {

  return (
    <footer className="site-footer back-image overlay">
        <div className="sec-wp">
            <div className="container">
                <div className="common-sec">
                    <div className="row">
                            <div className="footer-logo mb-30 " data-wow-duration="1s" data-wow-delay="0.1s">
                                <a href="index.html" title="Travel & Tour"><img src= {whiteLogo} alt="Logo"/></a>
                            </div>
                            <div className="footer-text mb-30 " data-wow-duration="1s" data-wow-delay="0.2s">
                                <p><b>Holiday Planners</b> sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.</p>
                            </div>
                            <div className="newsletter-form mb-30 " data-wow-duration="1s" data-wow-delay="0.3s">
                                <form>
                                    <span className="form-control-span email-wrap">
                                        <input type="email" className="form-input" placeholder="Enter Your Email" required/>
                                        <button type="submit" className="sec-btn sm-btn"><span>Submit</span></button>
                                    </span>
                                </form>
                            </div>
                            <div className="payment-companies-logo" data-wow-duration="1s" data-wow-delay="0.4s">
                                <img src= {paymentCom} alt="payment"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-nav-wp" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="footer-title">
                                    <div className="h3-title">Navigation</div>
                                </div>
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="tour.html">Tour</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-contact-wp wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div className="footer-title">
                                    <div className="h3-title">Need Help ?</div>
                                </div>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <span className="contact-label">Call Us</span>
                                            <a href="tel:1234567890">+123 456 7890</a>
                                        </li>
                                        <li>
                                            <span className="contact-label">Email for Us</span>
                                            <a href="">holidayplanners@gmail.com</a>
                                        </li>
                                        <li>
                                            <span className="contact-label">Location</span>
                                            <a href="">Main Street, Victoria 8007.</a>
                                        </li>
                                        <li className="social-icons">
                                            <span className="contact-label">Follow us</span>
                                            <ul>
                                                <li>
                                                    <a href="" title="Follow us on Facebook">
                                                        <span className="icon"><FaFacebookF/></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="" title="Follow us on Instagram">
                                                        <span className="icon"><FaTwitter/></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="" title="Follow us on Twitter">
                                                        <span className="icon"><FaInstagram/></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="copyright-text text-lg-left">Copyright © 2021 <a href="" target="_blank">Geek Code Lab</a>. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright-link">
                                <ul>
                                    <li><a href="" title="Privacy Policy">Privacy Policy</a></li>
                                    <li><a href="" title="Terms of Use">Terms of Use</a></li>
                                    <li><a href="" title="Cookie Policy">Cookie Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
  );
}

export default Footer;