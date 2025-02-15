// export default FilterPopup;
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { Button, Input } from "../../index";
import { useDispatch, useSelector } from 'react-redux';
import { isSameDay } from 'date-fns';
import { setFiltered } from '../../../store/slices/filter.slice';

const BlogsFilterPopup = ({ onClose }) => {
    const dispatch = useDispatch();
    const postsdata = useSelector((state) => state.blog);
    const posts = postsdata.posts.postsData;

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
    const filteredCategories = filterHierarchy(categories, "6728d7790093687377464455");
    // const data = filterHierarchy(categories, "6728d5ec46ad752365cab7c9");
    // console.log("Filtered Cat data: ", filteredCategories);

    const onSubmit = async (data) => {
        // console.log("Hook Form Data is: ", data);
        try {
            // console.log("Posts LIst: ", posts);
            const filteredPostsList = posts.filter(item => {
                return item.title === data?.title ||
                    item.categoryId === data?.parentId ||
                    item.status === data?.status ||
                    isSameDay(new Date(item.publishedAt), new Date(data?.published));
            });
            // console.log("Filtered Posts LIst: ", filteredPostsList);

            if (filteredPostsList) {
                const postData = filteredPostsList;
                if (postData) {
                    dispatch(setFiltered(
                        {
                            name: "posts", // The name of the entity
                            filteredData: postData
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
                <h3>Filter Blogs</h3>
                <button onClick={onClose} className="close-button">✖</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
                <Input
                    label="Title:"
                    type="text"
                    placeholder="Enter Title"
                    {...register("title")}
                />
                <div className="full-width">
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
                </div>
                <Input
                    label="Date Published:"
                    type="date"
                    placeholder="Enter Date Published"
                    {...register("published")}
                />

                <div className="filter-field">
                    <label>Status</label>
                    {/* <select name="status" value={filters.status} onChange={handleChange}> */}
                    <select name="status" {...register("status")}>
                        <option value="">Select</option>
                        <option value="published">Published</option>
                        <option value="unpublish">Unpublish</option>
                        <option value="draft">Draft</option>
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

export default BlogsFilterPopup;