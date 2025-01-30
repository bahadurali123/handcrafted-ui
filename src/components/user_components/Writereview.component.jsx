import React, { useState } from 'react';
import "../../styles/Components/user/Writereview.css";
import { Button, Input } from "../index";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import reviewService from '../../../services/review.service';
import { addReview } from '../../store/slices/review.slice';

const WriteReview = () => {
    const orderId = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reviewdata = useSelector((state) => state.review);
    const reviewsList = reviewdata.reviews.ReviewsData;

    const reviewStatus = reviewsList.find(item => item.orderId === orderId.orderId);

    console.log("Order Id: ", orderId, reviewStatus);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log("Blog Added:", data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("review", data.review);
        formData.append("image", data.image[0]);
        formData.append("reviewDescription", data.reviewDescription);

        console.log("FormData", formData);
        try {
            const response = await reviewService.createReview(orderId.orderId, formData);
            console.log("Add Review Response: ", response);
            if (response) {
                const reviewData = response.data;
                if (reviewData) {
                    dispatch(addReview({ reviewData }));
                    reset();
                }
                navigate(`/account/orders`)
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (reviewStatus) return <p>Review already exist.</p>;
    return (
        <div className="write-review">
            <h2 className='review-heading'>Write Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="review-form">
                <div className="input-group">
                    <div className="field">
                        <Input
                            label="Name:"
                            type="text"
                            placeholder="Enter Name"
                            {...register("name", { required: 'Name is required' })}
                        />
                        {errors.name && <p className="error-message">{errors.name.message}</p>}
                    </div>

                    <div className="field">
                        <Input
                            label="E-Mail:"
                            type="email"
                            placeholder="Enter Email"
                            {...register("email", { required: 'Email is required' })}
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="input-group">
                    <div className="field">
                        <Input
                            label="Review:"
                            type="number"
                            placeholder="Enter Review 1 to 5"
                            {...register("review", { required: 'Rating is required', min: 1, max: 5 })}
                        />
                        {errors.review && <p className="error-message">{errors.review.message}</p>}
                    </div>

                    <div className="field">
                        <Input
                            label="Image:"
                            type="file"
                            {...register("image", { required: 'Image is required' })}
                        />
                        {errors.image && <p className="error-message">{errors.image.message}</p>}
                    </div>
                </div>

                <div className="full-width-field">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        placeholder="Enter description"
                        {...register("reviewDescription", { required: 'Description is required' })}
                    />
                    {errors.reviewDescription && <p className="error-message">{errors.reviewDescription.message}</p>}
                </div>

                <div className='btn-section'>
                    <Button
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default WriteReview;