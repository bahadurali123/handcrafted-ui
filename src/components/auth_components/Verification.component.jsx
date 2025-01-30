import { useForm } from "react-hook-form";
import "../../styles/Components/login.css";
import { Button, Input } from "../index.js"
import authService from "../../../services/auth.service";
import image from "../../assets/envelope.jpg"
import { Link, useNavigate } from "react-router-dom";

const Verification = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log("Hook Form Data is: ", data);
        try {
            const response = await authService.verification(data);
            console.log("In Verification: ", response);
            if (response.data) {
                navigate("/account/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const regenerate = async () => {
        try {
            const response = await authService.regeneratecode();
            console.log("In Re-generate Code: ", response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit(onSubmit)} className="verify-box" style={{ maxWidth: "500px" }}>
                <img className="verify-icon" src={image} alt="envelop icon" />
                <h2 className="verify-heading">
                    Please check your email
                </h2>
                <p className="signup-link">
                    We ve sent a code to example@handcrafted.com
                </p>
                <Input
                    type="text"
                    placeholder="Enter Code"
                    {...register("verificationCode", { required: true })}
                />

                <div className="btns-div">

                    <p className="signup-link">
                        Didn t get the code? <Link to="#" onClick={regenerate} className="link">Click to resend</Link>
                    </p>
                    <Button
                        type="submit"
                    >
                        Verify
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Verification;