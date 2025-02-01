import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetAllProducts from "../../backend_fetcher/getAllProducts";
import GetAllPosts from "../../backend_fetcher/getAllPosts";
import GetAllCategories from "../../backend_fetcher/getAllCategories";
import GetAllReviews from "../../backend_fetcher/getAllReviews";
import GetAllComments from "../../backend_fetcher/getAllComments";
import GetAllLikes from "../../backend_fetcher/getAllLikes";
import LoadingIndicator from "../Other_components/Loading.component";
import GetAllUsers from "../../backend_fetcher/getAllUsers";

function UiWrapper({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const awaitData = async () => {
            setLoading(true);
            await GetAllProducts(dispatch);
            await GetAllPosts(dispatch);
            await GetAllCategories(dispatch);
            await GetAllReviews(dispatch);
            await GetAllComments(dispatch);
            await GetAllLikes(dispatch);
            await GetAllUsers(dispatch);
            setLoading(false);
        }
        awaitData();
    }, [navigate, dispatch])
    return !loading ? <>{children}</> : <LoadingIndicator />;
}

export default UiWrapper;