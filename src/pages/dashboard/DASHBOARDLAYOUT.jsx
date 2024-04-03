import "./dashboardlayout.css"

import DashNav from '../../component/dashboard/DashNav';
import { Outlet } from 'react-router-dom';
import DashboardToolbar from '../../component/dashboard/DashboardToolbar';
import useAccess from "../../hooks/useAccess";

const DASHBOARDLAYOUT = () => {
    useAccess()
    return (
        <>
            <DashboardToolbar />
            <div className="panel">
                <DashNav />
                <div className="panel-pages">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DASHBOARDLAYOUT;