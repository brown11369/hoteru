import { Link } from "react-router-dom";
import "./header.css"
import { FaPhoneAlt, FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareInstagram, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
import Logo from "../../component/client/Logo";

export default function Header() {
    return (
        <header className="main_header_area">

            <div className="container">
                <div className="header_top">
                    <div className="left_top_bar">
                        <FaPhoneAlt className="header_icons" /><span> 91-9870895374</span>&nbsp;&nbsp;
                        <IoMdMail className="header_icons" /><span> delicious@gmail.com</span>
                    </div>
                    <div className="right_top_bar">
                        <FaFacebookSquare className="header_icons" />
                        <FaSquareInstagram className="header_icons" />
                        <FaSquareTwitter className="header_icons" />
                        <FaLinkedin className="header_icons" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="header_menu">
                    <Logo />
                    <div className="menu_item">
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/about" >About</Link></li>
                            <li><Link to="/dishes" >Dishes</Link></li>
                            <li><Link to="/rooms" >Rooms</Link></li>
                            <li><Link to="/blog" >Blog</Link></li>
                            <li><Link to="/contact" >Contact</Link></li>
                            <li><Link to="/user" >User</Link></li>
                            <li><Link to="/dashboard-auth/login" >Dashboard</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}