import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux"


const DashboardToolbar = () => {
    const adminInfo = useSelector(store => store.admin.adminInfo)
    return (
        <div className="toolbar">
            <span><FaUser /> {adminInfo?.userName}</span>
            <span>User ID:{adminInfo?._id}</span>
            <span>User Email:{adminInfo?.email}</span>
        </div>
    )
}

export default DashboardToolbar;