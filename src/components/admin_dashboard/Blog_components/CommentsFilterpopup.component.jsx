// export default FilterPopup;
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { Button, Input } from "../../index";

const CommentsFilterPopup = ({ onClose }) => {
    const { register, handleSubmit } = useForm();
    // const [filters, setFilters] = useState({
    //     title: '',
    //     category: '',
    //     datePublished: '',
    //     status: '',
    // });

    const onSubmit = async (data) => {
        // console.log("Hook Form Data is: ", data);
        try {
            // const response = await authService.signup(data);
            // console.log("In Edit User: ", response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="filter-popup">
            <div className="filter-popup-header">
                <h3>Filter Comments</h3>
                <button onClick={onClose} className="close-button">✖</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
                <Input
                    label="Comment:"
                    type="text"
                    placeholder="Enter Comment"
                    {...register("comment")}
                />
                <Input
                    label="User:"
                    type="text"
                    placeholder="Enter User Name"
                    {...register("user")}
                />
                <Input
                    label="Date Published:"
                    type="date"
                    placeholder="Enter Date Published"
                    {...register("published")}
                />

                <div className="filter-field">
                    <label>Status</label>
                    <select name="status" {...register("status")}>
                        <option value="">Select</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Banned">Banned</option>
                    </select>
                </div>

                <div className="popup-actions">
                    <Button
                        type='button'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        type='submit'
                    >
                        Apply Filters
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CommentsFilterPopup;