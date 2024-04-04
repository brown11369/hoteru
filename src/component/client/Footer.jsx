import { Link } from "react-router-dom";
import Logo from "../../component/client/Logo"
import "./footer.css"

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-item">
                        <Logo />
                        <p>All contents of the delicious.com excluding publicly sourced documents are Copyright © 2013-2024 Delicious Inc. All rights reserved. Terms of Service • Privacy Policy</p>
                    </div>
                    <div className="footer-item">
                        <h3>Extra Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/dishes">Dishes</Link></li>
                            <li><Link to="/rooms">Rooms</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Other Links</h3>
                        <ul>
                            <li><Link to="/restaurant-menu">Menu</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms and Service</Link></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Social Media</h3>
                        <div className="social-icons">
                                <FaFacebookSquare className="header_icons" />
                                <FaSquareInstagram className="header_icons" />
                                <FaSquareTwitter className="header_icons" />
                                <FaLinkedin className="header_icons" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-bottom">
                    <p>All contents of the delicious.com excluding publicly sourced documents are Copyright © 2013-2024 Delicious Inc. All rights reserved. Terms of Service • Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}