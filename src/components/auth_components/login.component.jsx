import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/Components/login.css";
import ReCAPTCHA from "react-google-recaptcha";
import config from "../../../config/configuration.js";
import { Button, Input, PasswordInput } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/slices/auth.slice.js";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userverify, SetUserVerify] = useState(false);

    const onSubmit = async (data) => {
        // console.log("Hook Form Data is: ", data);
        try {
            const response = await authService.signin(data);
            // console.log("In login: ", response);
            if (response) {
                const userData = response.data;
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/");
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            // setError(error);
            console.log(error);
            alert("An error occurred: ", error)
            navigate("auth/login");
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
            // console.log("In facebook login: ", response);
            if (response) {
                // dispatch(authLogin(response.data));
                window.location.href = response.redirect;

            }
        } catch (error) {
            console.log(error);
        }
    }

    function onChange(value) {
        SetUserVerify(!userverify);
        console.log("Captcha value:", value);
    }

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit(onSubmit)} className="signin-box">
                <h2 className="signin-heading">Sign In</h2>

                <Input
                    label="Email:"
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", { required: true })}
                />
                <PasswordInput
                    label="Password:"
                    placeholder="Enter Password"
                    {...register("password", { required: true })}
                />

                <div className="recaptcha-container">
                    {/* <ReCAPTCHA sitekey="your-recaptcha-site-key" /> */}
                    <ReCAPTCHA sitekey={config.recaptchaKey} onChange={onChange} />
                </div>

                <div className="btns-div">
                    <Link to="/auth/reset-password" className="forgot-password link">
                        Forgot Password?
                    </Link>

                    <Button
                        type="submit"
                        customStyles={{
                            width: "40%"
                        }}
                        disabled={!userverify}
                    >
                        Sign In
                    </Button>

                    <p className="signup-link">
                        Not have an account? <Link to="/auth/signup" className="link">Sign Up</Link>
                    </p>

                    <Button
                        onClick={googlelogin}
                        customStyles={{
                            width: "90%"
                        }}
                        disabled={!userverify}
                    >
                        Sign In with Google
                    </Button>
                    <Button
                        onClick={facebooklogin}
                        customStyles={{
                            width: "90%"
                        }}
                        disabled={!userverify}
                    >
                        Sign In with Facebook
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Login;
