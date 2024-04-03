import "./blogcard.css"
const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="blog-img-container">
                <img  src="/hotel_main.jpg" alt="Blog Image" />
            </div>
            <div className="blog-card-content">
                <h2>Blog Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec leo eu magna vehicula dignissim vel nec libero.</p>
                <div className="read-more">
                    <a href="#">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;