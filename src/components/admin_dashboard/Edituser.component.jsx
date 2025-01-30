import { useForm } from 'react-hook-form';
import { Input, Button } from "../index";
import '../../styles/Components/admin/Edituser.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userService from '../../../services/users.service';
import { updateUserProfile } from '../../store/slices/users.slice';

const EditUserFromAdmin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useParams().userId;
    console.log("Editable user: ", userId);
    const usersdata = useSelector((state) => state.users);
    const users = usersdata.users.usersData;
    const user = users.find(item => item._id === userId);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: user.email || "",
            status: user.status || "",
        },
    });

    const onSubmit = async (data) => {
        try {
            console.log("Edit user status", data);
            const response = await userService.updateUserStatus(user._id, data);
            console.log("In Update User status: ", response);
            console.log("In Update User status data: ", response.data);
            if (response) {
                const userData = response.data;
                if (userData) {
                    dispatch(updateUserProfile({ userData }));
                    reset();
                    navigate(`/admin/user/${userId}`)
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="edit-user-wrapper">
            <div className="edit-user-container">
                <h2 className="edit-user-title">Edit User</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="edit-user-form">
                    <div className="edit-user-group">
                        <Input
                            label="Email:"
                            type="email"
                            placeholder="example@gmail.com"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className="error-message">Email is required</p>}
                    </div>

                    <div className="edit-user-status">
                        <label className="edit-user-label">Status:</label>
                        <div className="edit-user-status-options">
                            <label className="edit-user-radio">
                                <input
                                    type="radio"
                                    value="Active"
                                    {...register("status", { required: true })}
                                />
                                &nbsp;Active
                            </label>
                            <label className="edit-user-radio">
                                <input
                                    type="radio"
                                    value="Inactive"
                                    {...register("status", { required: true })}
                                />
                                &nbsp;Inactive
                            </label>
                        </div>
                        {errors.status && <p className="error-message">Status is required</p>}
                    </div>

                    <p className="edit-user-info">
                        Deactivated users cannot purchase, comment, or review. Accounts can be reactivated.
                    </p>
                    <div className="edit-user-button">
                        <Button
                            type='submit'
                        >
                            Update

                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserFromAdmin;