
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewSection = ({ reviews }) => {

    const star = `${<FontAwesomeIcon icon={ faStar } />}`

    return (
        <section className="review-section" id="review-section">
            <h2>Customer Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index} className="review-card">
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
                    
                    <div className="star-rating">
                    {[...Array(review.rating)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                </div>

                </div>
            ))}
        </section>
    );
};

export default ReviewSection;
