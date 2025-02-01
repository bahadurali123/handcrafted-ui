import shippingService from "../../services/shipping.service";
import { loadAllShippings, setShippingLoading } from "../store/slices/shipping.slice";

const GetUserShippings = async (dispatch) => {
    try {
        const response = await shippingService.getUserShippings();
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

export default GetUserShippings;