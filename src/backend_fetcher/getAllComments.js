import commentService from "../../services/comment.service";
import { loadAllComments, setCommentLoading } from "../store/slices/comment.slice";

const GetAllComments = async (dispatch) => {
    try {
        const response = await commentService.getAllComments();
        console.log("Comments: ", response);
        dispatch(setCommentLoading(true));
        if (response) {
            const CommentsData = response.data;
            if (CommentsData) {
                dispatch(loadAllComments({ CommentsData }));
                dispatch(setCommentLoading(false));
            }
        }
    } catch (error) {
        console.log("Featch Comments Error: ", error);
    }
}

export default GetAllComments;