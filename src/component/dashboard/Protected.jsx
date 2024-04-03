import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const adminInfo = useSelector(store => store.admin.adminInfo)
    const persist = JSON.parse(localStorage.getItem("persist"))

    if (!persist && !adminInfo?.accessToken) return <Navigate to="/" />

    if (persist || adminInfo?.accessToken) return children
}

export default Protected;