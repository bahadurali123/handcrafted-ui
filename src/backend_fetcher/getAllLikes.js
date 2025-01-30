import likeService from "../../services/like.service";
import { loadAllLikes, setLikeLoading } from "../store/slices/like.slice";

const GetAllLikes = async (dispatch) => {
    try {
        const response = await likeService.getAllLikes();
        console.log("Likes: ", response);
        dispatch(setLikeLoading(true));
        if (response) {
            const LikesData = response.data;
            if (LikesData) {
                dispatch(loadAllLikes({ LikesData }));
                dispatch(setLikeLoading(false));
            }
        }
    } catch (error) {
        console.log("Featch Likes Error: ", error);
    }
}

export default GetAllLikes;