import productService from "../../services/product.service";
import { loadAllProducts, setproductsLoading } from "../store/slices/Product.slice";

const GetAllProducts = async (dispatch) => {
    try {
        const response = await productService.getAllProducts();
        dispatch(setproductsLoading(true));
        if (response) {
            const ProductsData = response.data;
            if (ProductsData) {
                dispatch(loadAllProducts({ ProductsData }));
                dispatch(setproductsLoading(false));
            }
        }
    } catch (error) {
        console.log("Featch Products Error: ", error);
    }
}

export default GetAllProducts;