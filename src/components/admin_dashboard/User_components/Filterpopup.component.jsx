import React from 'react';
import '../../../styles/Components/admin/Userfilterpopup.css';
import { useForm } from "react-hook-form";
import { Button, Input } from "../../index";
import { useDispatch, useSelector } from 'react-redux';
import { setFiltered } from '../../../store/slices/filter.slice';
import { isSameDay } from 'date-fns';



const UserFilterPopup = ({ onClose }) => {
    const dispatch = useDispatch();
    const usersdata = useSelector((state) => state.users);
    const users = usersdata.users.usersData;
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // console.log("Hook Form Data is: ", data);
        try {
            const filteredUsersList = users.filter(item => {
                return item.name === data?.username ||
                    item.orderHistory.length === parseInt(data?.userorders) ||
                    item.status === data?.userstatus ||
                    isSameDay(new Date(item.createdAt), new Date(data?.userregistration))
            });
            // console.log("Filtered Users List: ", filteredUsersList);

            if (filteredUsersList) {
                const userData = filteredUsersList;
                if (userData) {
                    dispatch(setFiltered(
                        {
                            name: "Users", // The name of the entity
                            filteredData: userData
                        }
                    ));
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="filter-popup">
            <div className="popup-header">
                <h3>Filter Users</h3>
                <button onClick={onClose} className="close-popup"><i className="bi bi-x-lg"></i></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
                <div className="form-row">
                    <Input
                        label="Name"
                        type="text"
                        placeholder="Enter Name"
                        {...register("username")}
                    />
                </div>
                <div className="form-row">
                    <Input
                        label="Registration Date"
                        type="date"
                        placeholder="Enter Registration Date"
                        {...register("userregistration")}
                    />
                </div>
                <div className="form-row">
                    <Input
                        label="Total Orders"
                        type="number"
                        placeholder="Enter Total Orders"
                        {...register("userorders")}
                    />
                </div>
                <div className="form-row">
                    <label>Account Status</label>
                    <select
                        {...register('userstatus')}
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                <div className="form-row">
                    <Button
                        type='button'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        type='submit'
                        onClick={() => setTimeout(onClose, 200)}
                    >
                        Apply Filters
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UserFilterPopup;