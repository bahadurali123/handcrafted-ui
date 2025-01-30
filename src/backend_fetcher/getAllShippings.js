import shippingService from "../../services/shipping.service";
import { loadAllShippings, setShippingLoading } from "../store/slices/shipping.slice";

const GetAllShippings = async (dispatch) => {
    try {
        const response = await shippingService.getAllShippings();
        console.log("All Shippings: ", response);
        dispatch(setShippingLoading(true));
        if (response) {
            const ShippingsData = response.data;
            if (ShippingsData) {
                dispatch(loadAllShippings({ ShippingsData }));
                dispatch(setShippingLoading(false));
            }
        }
    } catch (error) {
        console.log("Featch Shippings Error: ", error);
    }
}

export default GetAllShippings;