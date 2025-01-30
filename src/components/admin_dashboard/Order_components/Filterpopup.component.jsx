// export default FilterPopup;
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { Button, Input } from "../../index";
import { useDispatch, useSelector } from 'react-redux';
import { isSameDay } from 'date-fns';
import { setFiltered } from '../../../store/slices/filter.slice';

const OrdersFilterPopup = ({ onClose }) => {
    const dispatch = useDispatch();
    // const postsdata = useSelector((state) => state.blog);
    // const posts = postsdata.posts.postsData;
    const orderdata = useSelector((state) => state.orders);
    const orders = orderdata.orders.ordersData.orders;

    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    const { register, handleSubmit } = useForm();

    // Filter categories for Blog
    function filterHierarchy(categories, parentName) {
        const result = [];
        const findChildren = (parentId) => {
            // Find all children of the current parent
            const children = categories.filter(category => category.parentId === parentId);
            result.push(...children); // Add them to the result array
            children.forEach(child => findChildren(child._id)); // Recursively find their children
        };

        // Find and add the parent by name
        const parent = categories.find(category => category._id === parentName);
        if (parent) {
            result.push(parent); // Add the parent to the result array
            findChildren(parent._id); // Start finding its children
        }

        return result;
    };
    const filteredCategories = filterHierarchy(categories, "6728d5ec46ad752365cab7c9");
    console.log("Filtered Cat data: ", filteredCategories);

    const onSubmit = async (data) => {
        console.log("Hook Form Data is: ", data);
        try {
            console.log("Orders LIst: ", orders);
            const filteredOrdersList = orders.filter(item => {
                // return item._id === data?.Id
                return item._id === data?.Id ||
                    item.totalAmount.$numberDecimal >= parseInt(data?.minPrice) &&
                    item.totalAmount.$numberDecimal <= parseInt(data?.maxPrice) ||
                    isSameDay(new Date(item.createdAt), new Date(data?.published));
                // item.categoryId === data?.parentId ||
                // item.status === data?.status ||
            });
            console.log("Filtered orders LIst: ", filteredOrdersList);

            if (filteredOrdersList) {
                const orderData = filteredOrdersList;
                if (orderData) {
                    dispatch(setFiltered(
                        {
                            name: "orders", // The name of the entity
                            filteredData: orderData
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
            <div className="filter-popup-header">
                <h3>Filter Orders</h3>
                <button onClick={onClose} className="close-button">✖</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
                <Input
                    label="ID:"
                    type="text"
                    placeholder="Enter order id"
                    {...register("Id")}
                />
                {/* <div className="full-width">
                    <label>Category</label>
                    <select
                        {...register('parentId')}
                    >
                        <option value="">Select Category</option>
                        {filteredCategories.map((c) => (
                            <option key={c._id} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div> */}
                <Input
                    label="Date Published:"
                    type="date"
                    placeholder="Enter Date Published"
                    {...register("published")}
                />

                {/* <div className="filter-field">
                    <label>Status</label>
                    <select name="status" {...register("status")}>
                        <option value="">Select</option>
                        <option value="published">Published</option>
                        <option value="unpublish">Unpublish</option>
                        <option value="draft">Draft</option>
                    </select>
                </div> */}
                <Input
                    label="Price Range:"
                    type="number" placeholder="Min" {...register('minPrice')}
                />
                <Input
                    type="number" placeholder="Max" {...register('maxPrice')}
                />

                <div className="popup-actions">
                    <Button
                        type='button'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        type='submit'
                        // onClick={onClose}
                        onClick={() => setTimeout(onClose, 200)}
                    >
                        Apply Filters
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default OrdersFilterPopup;