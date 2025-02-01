import userService from "../../services/users.service";
import { allUsers, setUserLoading } from "../store/slices/users.slice";

const GetAllUsers = async (dispatch) => {
    try {
        const response = await userService.getAllUsers();
        dispatch(setUserLoading(true));
        if (response) {
            const usersData = response.data;
            if (usersData) {
                dispatch(allUsers({ usersData }));
                dispatch(setUserLoading(false));
            }
        }
    } catch (error) {
        console.log("Featch Posts Error: ", error);
    }
}

export default GetAllUsers;