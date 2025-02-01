import orderService from "../../services/order.service";
import { addUserOrder, setOrderLoading } from "../store/slices/order.slice";

const GetAllOrders = async (dispatch) => {
    try {
        const response = await orderService.getAllOrders();
        dispatch(setOrderLoading(true));
        if (response) {
            const ordersData = response.data;
            if (ordersData) {
                dispatch(addUserOrder({ ordersData }));
                dispatch(setOrderLoading(false));
            }
        }
    } catch (error) {
        console.log("Featch Orders Error: ", error);
    }
}

export default GetAllOrders;