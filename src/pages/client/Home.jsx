import { IoIosBed, IoMdWifi } from "react-icons/io";
import { LiaUtensilsSolid } from "react-icons/lia";
import { TbSwimming } from "react-icons/tb";
import "./home.css";
import FoodCard from "../../component/client/FoodCard";
import RoomCard from "../../component/client/RoomCard";
import BlogCard from "../../component/client/BlogCard";
import { Helmet } from "react-helmet-async";
const Home = () => {
    return (
        <main className="main-div">
            <Helmet>
                <title>Hoteru - Home</title>
                <meta name='description' content='We are best company in restaurant chain. home page' />
            </Helmet>
            <div>
                <div className="hero-section">
                    <img src="/dish.jpg" alt="Picture of the dish" />
                </div>
                <div className="hotel-features">
                    <div className="container hotel-features">
                        <div className="feature">
                            <IoIosBed className="feture_icon" />
                            <span>Comfortable Rooms</span>
                        </div>
                        <div className="feature">
                            <LiaUtensilsSolid className="feture_icon" />
                            <span>Delicious Food</span>
                        </div>
                        <div className="feature">
                            <TbSwimming className="feture_icon" />
                            <span>Pool</span>
                        </div>
                        <div className="feature">
                            <IoMdWifi className="feture_icon" />
                            <span>Free Wi-Fi</span>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="services_title">
                        <h2><span>Explor Our</span> All Dishes</h2>
                    </div>
                    <div className="services">
                        
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                    </div>
                </div>



                <div className="container">
                    <div className="services_title">
                        <h2><span>Explor Our</span> Luxurious Room</h2>
                    </div>
                    <div className="services">
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                    </div>
                </div>

                <div className="container">
                    <div className="services_title">
                        <h2><span>Customer</span> Reviews</h2>
                    </div>
                    <div className="review_container">
                        <div className="review">
                            <p className="name">John Doe</p>
                            <p className="date">March 15, 2024</p>
                            <p className="rating">Rating: 4.5 stars</p>
                            <p className="comment">Great hotel, friendly staff, and excellent location. Would definitely recommend!</p>
                        </div>
                        <div className="review">
                            <p className="name">Jane Smith</p>
                            <p className="date">March 14, 2024</p>
                            <p className="rating">Rating: 5 stars</p>
                            <p className="comment">Absolutely loved my stay! The room was clean, comfortable, and had a fantastic view.</p>
                        </div>
                        <div className="review">
                            <p className="name">Emily Johnson</p>
                            <p className="date">March 13, 2024</p>
                            <p className="rating">Rating: 4.8 stars</p>
                            <p className="comment">Had an amazing experience at this hotel. The service was impeccable, and the amenities were top-notch.</p>
                        </div>
                        <div className="review">
                            <p className="name">Michael Brown</p>
                            <p className="date">March 12, 2024</p>
                            <p className="rating">Rating: 4.7 stars</p>
                            <p className="comment">The staff went above and beyond to make our stay enjoyable. The room was spacious and clean.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="services_title">
                        <h2><span>Recent</span> Blogs</h2>
                    </div>
                    <div className="services">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Home;