import './restaurantMenu.css';
const RestaurantMenu = () => {
    return (
        <div className="menu">
            <h1>Restaurant Menu</h1>

            <div className="category">
                <h2>Starters</h2>
                <div className="item">
                    <span className="item-name">Bruschetta</span>
                    <span className="item-price">₹100</span>
                </div>
                <div className="item">
                    <span className="item-name">Caprese Salad</span>
                    <span className="item-price">₹120</span>
                </div>
                <div className="item">
                    <span className="item-name">Garlic Bread</span>
                    <span className="item-price">₹80</span>
                </div>
                <div className="item">
                    <span className="item-name">Samosa</span>
                    <span className="item-price">₹50</span>
                </div>
                <div className="item">
                    <span className="item-name">Paneer Tikka</span>
                    <span className="item-price">₹150</span>
                </div>
            </div>

            <div className="category">
                <h2>Main Courses</h2>
                <div className="item">
                    <span className="item-name">Spaghetti Carbonara</span>
                    <span className="item-price">₹200</span>
                </div>
                <div className="item">
                    <span className="item-name">Margherita Pizza</span>
                    <span className="item-price">₹180</span>
                </div>
                <div className="item">
                    <span className="item-name">Grilled Salmon</span>
                    <span className="item-price">₹250</span>
                </div>
                <div className="item">
                    <span className="item-name">Butter Chicken</span>
                    <span className="item-price">₹220</span>
                </div>
                <div className="item">
                    <span className="item-name">Biryani</span>
                    <span className="item-price">₹180</span>
                </div>
            </div>

            <div className="category">
                <h2>Desserts</h2>
                <div className="item">
                    <span className="item-name">Tiramisu</span>
                    <span className="item-price">₹150</span>
                </div>
                <div className="item">
                    <span className="item-name">Cheesecake</span>
                    <span className="item-price">₹120</span>
                </div>
                <div className="item">
                    <span className="item-name">Gelato</span>
                    <span className="item-price">₹100</span>
                </div>
                <div className="item">
                    <span className="item-name">Gulab Jamun</span>
                    <span className="item-price">₹80</span>
                </div>
                <div className="item">
                    <span className="item-name">Rasgulla</span>
                    <span className="item-price">₹70</span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;