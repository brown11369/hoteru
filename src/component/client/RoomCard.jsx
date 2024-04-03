import "./roomcard.css"
const RoomCard = () => {
    return (
        <div className="room-card">
            <div className="room-image">
                <img className="roomImage"  src="/room.jpg" alt="room" />
            </div>
            <div className="room-details">
                <h2 className="room-title">Deluxe Room</h2>
                <p className="room-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel gravida purus.</p>
                <div className="room-info">
                <p className="room-price"><span>₹2000</span>/Night</p>
                <button>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default RoomCard;