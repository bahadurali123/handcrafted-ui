import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetAllProducts from "../../backend_fetcher/getAllProducts";
import GetUserOrders from "../../backend_fetcher/getUserOrders";
import GetUserShippings from "../../backend_fetcher/getUserShippings";
import LoadingIndicator from "../Other_components/Loading.component";

function UserWrapper({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data?.userData;

    useEffect(() => {
        const awaitData = async () => {
            if (logedUser.status === "Active" && (logedUser.role === "User" || logedUser.role === "Admin")) {
                console.log("You are User: ");
                setLoading(true);
                await GetUserOrders(dispatch);
                await GetUserShippings(dispatch);

                await GetAllProducts(dispatch);
                setLoading(false);
            } else {
                navigate('/');
            }
        }
        awaitData();
    }, [navigate, dispatch])
    // return !loading ? <>{children}</> : <h1>Loading...</h1>;
    return !loading ? <>{children}</> : <LoadingIndicator />;
}

export default UserWrapper;