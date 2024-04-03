import "./dashboardAuth.css";

import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BiSolidHide, BiShowAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addAdminInfo } from "../../../redux/slice/adminSlice";
import { POST_DASHBOARD_LOGIN_URL } from '../../../utils/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashLogin = () => {
    const redirect=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle showing password
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault();      // Set loading message when form is submitted
        try {
            const response = await fetch(POST_DASHBOARD_LOGIN_URL, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password }),
            });

            if (response.ok) {
                const responseData = await response.json();
                dispatch(addAdminInfo(responseData?.userInfo))
                await localStorage.setItem("persist", JSON.stringify(true));
                toast("Logged in")
                redirect("/dashboard");
            } else {
                const errorData = await response.json();
                toast(errorData.message)
            }
        } catch (error) {
            toast("An error occurred while processing your request.")
        }
    };



    return (
        <div className="dashboard-auth">
            <div className="auth-container">
                <h1>Dashboard - Login</h1>

                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="email" id="email" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                        <div className='password-visible-input'>
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className='password-visible-icon' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <BiSolidHide /> : <BiShowAlt />}
                            </span>
                        </div>
                        <button type="submit" className='btn'>Dashboard Login</button>
                    </form>
                    <ToastContainer />
                </div>

                <div className="authpage-swith">
                    <span>don&apos;t have an account ?<Link to="/dashboard-auth/register"> Register</Link></span>
                    <Link to="/">&lt;&lt;Go back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default DashLogin;