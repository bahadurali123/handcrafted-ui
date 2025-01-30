import { useForm } from "react-hook-form";
import "../../styles/Components/login.css";
import { Button, Input, PasswordInput } from "../index.js"
import authService from "../../../services/auth.service";

const Resetpass = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log("Hook Form Data is: ", data);
        try {
            const response = await authService.resetpassword(data);
            console.log("In Reset Password: ", response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit(onSubmit)} className="signin-box">
                <h2 className="signin-heading">Forgot Password</h2>

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
                <PasswordInput
                    label="Confirm Password:"
                    placeholder="Enter Confirm Password"
                    {...register("confpassword", { required: true })}
                />

                <div className="btns-div">
                    <Button
                        type="submit"
                    >
                        Reset Password
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Resetpass;