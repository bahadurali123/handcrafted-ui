import BlogService from "../../services/blog.sercice";
import { allPosts, setPostsLoading } from "../store/slices/blog.slice";

const GetAllPosts = async (dispatch) => {
    try {
        const response = await BlogService.getAllBlogs();
        dispatch(setPostsLoading(true));
        if (response) {
            const postsData = response.data;
            if (postsData) {
                dispatch(allPosts({ postsData }));
                dispatch(setPostsLoading(false));
            }
        }
    } catch (error) {
        console.log("Featch Posts Error: ", error);
    }
}

export default GetAllPosts;