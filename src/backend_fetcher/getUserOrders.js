import orderService from "../../services/order.service";
import { addUserOrder, setOrderLoading } from "../store/slices/order.slice";

const GetUserOrders = async (dispatch) => {
    try {
        const response = await orderService.getOrdersByUser('userid');
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

export default GetUserOrders;