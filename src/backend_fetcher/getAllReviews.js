import reviewService from "../../services/review.service";
import { loadAllReviews, setReviewLoading } from "../store/slices/review.slice";

const GetAllReviews = async (dispatch) => {
    try {
        const response = await reviewService.getAllReviews();
        console.log("Reviews: ", response);
        dispatch(setReviewLoading(true));
        if (response) {
            const ReviewsData = response.data;
            if (ReviewsData) {
                dispatch(loadAllReviews({ ReviewsData }));
                dispatch(setReviewLoading(false));
            }
        }
    } catch (error) {
        console.log("Featch Reviews Error: ", error);
    }
}

export default GetAllReviews;