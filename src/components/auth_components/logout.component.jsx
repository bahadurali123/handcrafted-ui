import { Button } from "../index.js";
import { useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth.slice.js";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async () => {
        try {
            const response = await authService.signout();
            // console.log("SignOut Response: ", response);
            if (response) {
                if (response) {
                    dispatch(logout());
                    navigate("/");
                } else {
                    dispatch(logout());
                    navigate("/");
                }
            }
        } catch (error) {
            console.log(error);
            alert("An error occurred: ", error)
            navigate("/auth/login");
        }
    };


    return (
        <div className="signin-container">
            <div className="signin-box">
                <h1 className="signin-heading">Log Out</h1>
                <p className="signup-link">Are you sure you want to log out?</p>
                <div className="btns-div">
                    <Button
                        type="submit"
                        onClick={onSubmit}
                        customStyles={{
                            width: "40%"
                        }}
                    >
                        Log Out
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
