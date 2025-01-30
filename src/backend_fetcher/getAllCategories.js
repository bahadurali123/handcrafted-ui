import categoryService from "../../services/category.service";
import { loadAllCategories, setCategoryLoading } from "../store/slices/category.slice";

const GetAllCategories = async (dispatch) => {
    try {
        const response = await categoryService.getAllCategories();
        console.log("Category: ", response);
        dispatch(setCategoryLoading(true));
        if (response) {
            const categoriessData = response.data;
            if (categoriessData) {
                dispatch(loadAllCategories({ categoriessData }));
                dispatch(setCategoryLoading(false));
            }
        }
    } catch (error) {
        console.log("Featch Categories Error: ", error);
    }
}

export default GetAllCategories;