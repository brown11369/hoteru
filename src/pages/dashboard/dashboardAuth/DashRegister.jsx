import "./dashboardAuth.css";

import { Link, redirect } from "react-router-dom";
import { useState } from 'react';
import { POST_DASHBOARD_REGISTER } from '../../../utils/constants';
import { BiSolidHide, BiShowAlt } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashRegister = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (password === confirmPassword) {
                const response = await fetch(POST_DASHBOARD_REGISTER, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userName: userName, email: email, password: password }),
                });

                if (response.ok) {
                    const responseData = await response.json();
                    if (responseData.success) {
                        toast("User registered successfully.")
                        redirect("/dashboard-auth/login");
                    }
                    else {
                        toast(responseData.message)
                    }
                }
                else {
                    const errorData = await response.json();
                    toast(errorData.message)
                }
            }
            else {
                toast("Confirm Password not matched.")
            }
        } catch (error) {
            console.error('Error:', error);
            toast("An error occurred while processing your request.")
        }
    };


    return (
        <div className="dashboard-auth">
            <div className="auth-container">
                <h1>Dashboard Register</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="userName" value={userName} placeholder="Enter user name" onChange={(e) => setUserName(e.target.value)} />
                        <input type="email" id="email" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                        <div className='password-visible-input'>
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className='password-visible-icon' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <BiSolidHide className='' /> : <BiShowAlt />}
                            </span>
                        </div>
                        <input type={showPassword ? "text" : "password"} id="confirmPassword" placeholder="Confirm your Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button type="submit" className='btn'>Create an Account</button>
                    </form>
                    <ToastContainer />
                </div>
                <div className="authpage-swith">
                    <span>Go back to<Link to="/dashboard-auth/login" > Login </Link>page.</span>
                    <Link to="/">&lt;&lt;Go back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default DashRegister;