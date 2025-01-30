import authService from "../../services/auth.service";
import { login, logout } from "../store/slices/auth.slice";

const CheckAuthorized = async (dispatch, navigate, isUserRoute, isAdminRoute) => {
    console.log("...........Check OAut........... ");
    try {
        const response = await authService.checkauthorized();
        if (response) {
            const userData = response.data;
            console.log("Check OAut Response: ", response, userData);
            if (userData) {
                dispatch(login({ userData }));
            } else {
                dispatch(logout());
                if (isUserRoute || isAdminRoute) {
                    navigate(`auth/login`);
                }
            }
        }
    } catch (error) {
        console.log("Featch Check OAuth Error: ", error);
    }
}

export default CheckAuthorized;