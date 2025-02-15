import { useForm } from "react-hook-form";
import "../../styles/Components/login.css";
import { Button, Input, PasswordInput, Checkbox } from "../index.js"
import authService from "../../../services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/slices/auth.slice.js";

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // console.log("Hook Form Data is: ", data);
        try {
            const response = await authService.signup(data);
            // console.log("In Signup: ", response);
            if (response) {
                const userData = response.data;
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/auth/verify");
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const googlelogin = async () => {
        try {
            const response = await authService.googleSignin();
            // console.log("In google login: ", response);
            if (response) {
                // dispatch(authLogin(response.data));
                window.location.href = response.redirect;

            }
        } catch (error) {
            console.log(error);
        }
    }

    const facebooklogin = async () => {
        try {
            const response = await authService.facebookSignin();
            if (response) {
                window.location.href = response.redirect;

            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit(onSubmit)} className="signin-box">
                <h2 className="signin-heading">Sign Up</h2>
                <Input
                    label="Name:"
                    type="text"
                    placeholder="Enter Name"
                    {...register("name", { required: true })}
                />
                <Input
                    label="Email:"
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", { required: true })}
                />
                <PasswordInput
                    label="password:"
                    placeholder="Enter Password"
                    {...register("password", { required: true })}
                />
                <PasswordInput
                    label="Confirm Password:"
                    placeholder="Enter Confirm Password"
                    {...register("confpassword", { required: true })}
                />
                <Input
                    label="Phone:"
                    type="text"
                    placeholder="Enter Phone"
                    {...register("phone", { required: true })}
                />
                <Checkbox
                    label="I agree to the terms and conditions"
                    {...register("terms", { required: true })}
                />
                <div className="btns-div">
                    <Button
                        type="submit"
                        customStyles={{
                            width: "40%"
                        }}
                    >
                        Sign Up
                    </Button>
                    <p className="signup-link">
                        Already have an account? <Link to="/auth/login" className="link">Sign In</Link>
                    </p>
                    <Button
                        onClick={googlelogin}
                        customStyles={{
                            width: "90%"
                        }}
                    >
                        Sign Up with Google
                    </Button>
                    <Button
                        onClick={facebooklogin}
                        customStyles={{
                            width: "90%"
                        }}
                    >
                        Sign Up with Facebook
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Signup;