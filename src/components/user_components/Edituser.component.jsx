import { useForm } from "react-hook-form";
import "../../styles/Components/login.css";
import { Button, Input } from "../index.js"
import { useDispatch, useSelector } from "react-redux";
import userService from "../../../services/users.service.js";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/auth.slice.js";

const EditUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data.userData;
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: logedUser?.name || "",
            email: logedUser?.email || "",
            phone: logedUser?.phone || "",
        },
    });

    const onSubmit = async (data) => {
        console.log("Profile edit Form Data is: ", data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("image", data.image[0]);

        // console.log("FormData", formData);
        try {
            const response = await userService.updateUser(formData);
            console.log("Users: ", response.data);
            if (response) {
                const userData = response.data;
                if (userData) {
                    dispatch(login({ userData }));
                    reset();
                }
                navigate('/account/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit(onSubmit)} className="signin-box">
                <h2 className="signin-heading">Edit Profile</h2>
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
                <Input
                    label="Phone:"
                    type="text"
                    placeholder="Enter Phone"
                    {...register("phone", { required: true })}
                />
                <div className="form-group">

                    <Input
                        label="Image:"
                        type="file"
                        {...register('image', { required: 'Image is required' })}
                    />
                    {errors.image && <p className="error-message">{errors.image.message}</p>}
                </div>
                <div className="btns-div">
                    <Button
                        type="submit"
                        customStyles={{
                            width: "40%"
                        }}
                    >
                        Update
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;