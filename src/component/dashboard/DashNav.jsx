import "./dashnav.css"

import { GET_LOGOUT } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";


const DashNav = () => {
    const redirect = useNavigate()
    const logOut = async () => {
        const response = await fetch(GET_LOGOUT, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            const responseData = await response.json()
            console.log(responseData)
            redirect("/dashboard-auth/login");
        }
    }
    return (
        <div className="dashboard-navbar">
            <ul>
                <li><Link className="menu-item" to="/dashboard" >Dashboard</Link></li>
                <li><Link className="menu-item" to="/dashboard/blogs/all" >Blogs</Link></li>
                <li><Link className="menu-item" to="/dashboard/dishes/all" >Dishes</Link></li>
                <li><Link className="menu-item" to="/dashboard/rooms/all" >Rooms</Link></li>
                <li><Link className="menu-item" to="/dashboard/users" >User</Link></li>
                <li><span className="menu-item" onClick={() => { logOut() }}>Log Out</span></li>
            </ul>
        </div>
    )
}

export default DashNav;