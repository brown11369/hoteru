import "./foodcard.css";
import { FaStar } from "react-icons/fa6";
const FoodCard = () => {
    return (
        <div className="dish_card">
            <div className="dish_image">
                <img  src="/pexels-photo-1640777.jpeg" alt="Salad" />
            </div>
            <div className="dish_info">
                <div className="dish_title">
                    <h3>Salad</h3>
                    <p>Fresh & sweet</p>
                </div>
                <div className="dish_value">
                    <p>₹ 235</p>
                    <FaStar className="checked"/>
                    <FaStar className="checked"/>
                    <FaStar className="checked"/>
                    <FaStar className="checked"/>
                    <FaStar className="checked"/>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;