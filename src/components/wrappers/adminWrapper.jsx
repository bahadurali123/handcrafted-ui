import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetAllProducts from "../../backend_fetcher/getAllProducts";
import GetAllUsers from "../../backend_fetcher/getAllUsers";
import GetAllShippings from "../../backend_fetcher/getAllShippings";
import GetAllOrders from "../../backend_fetcher/getAllOrders";
import GetAllPosts from "../../backend_fetcher/getAllPosts";
import GetAllCategories from "../../backend_fetcher/getAllCategories";
import GetAllReviews from "../../backend_fetcher/getAllReviews";
import GetAllComments from "../../backend_fetcher/getAllComments";
import GetAllLikes from "../../backend_fetcher/getAllLikes";
import LoadingIndicator from "../Other_components/Loading.component";

function AdminWrapper({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data?.userData;

    useEffect(() => {
        const awaitData = async () => {
            if (logedUser.status === "Active" && logedUser.role === "Admin") {
                setLoading(true);
                await GetAllUsers(dispatch);
                await GetAllShippings(dispatch);
                await GetAllOrders(dispatch);
                await GetAllProducts(dispatch);
                await GetAllPosts(dispatch);
                await GetAllCategories(dispatch);
                await GetAllReviews(dispatch);
                await GetAllComments(dispatch);
                await GetAllLikes(dispatch);
                setLoading(false);
            } else {
                navigate('/');
            }
        }
        awaitData();
    }, [navigate, dispatch, logedUser])
    return !loading ? <>{children}</> : <LoadingIndicator />;
}

export default AdminWrapper;