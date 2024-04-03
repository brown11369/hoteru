import Header from '../../component/client/Header';
import Footer from '../../component/client/Footer';
import { Outlet } from 'react-router-dom';

const CLIENTLAYOUT = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default CLIENTLAYOUT;