import { SingleReview } from "../index";
import "../../styles/Ui/Review.css"
import { useSelector } from 'react-redux';

const ReviewsPage = () => {
    const reviewdata = useSelector((state) => state.review);
    const reviews = reviewdata.reviews.ReviewsData;

    return (
        <div className="reviews-page">
            <h2>Reviews</h2>
            <div className="reviews-list">
                {reviews.map(review => (
                    <SingleReview key={review._id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewsPage;
