import React, { useEffect, useState } from 'react';
import { CategoryForm } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import categoryService from '../../../services/category.service';
import { updateCategory } from '../../store/slices/category.slice';

const UpdateCategory = ({ CategoryId }) => {
    const categoryId = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    console.log("Update Categories: ", categories, categoryId);
    const category = categories.filter((item) => item._id === categoryId.categoryId);


    const handleUpdateCategory = async (data) => {
        console.log("Category data for Updated:", data);
        const formData = new FormData();
        formData.append("name", data.name); // Append text field
        formData.append("parentId", data.parentId); // Append text field
        formData.append("image", data.image[0]); // Append file input (first file)

        console.log("FormData", formData);
        // Send updated category data to the backend
        // updateCategory
        try {
            const response = await categoryService.updateCategory(category[0]._id, formData);
            console.log("In Update Category: ", response);
            if (response) {
                const categoryData = response.data;
                if (categoryData) {
                    dispatch(updateCategory({ categoryData }));
                }
                navigate("/admin/categories");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {category ? (
                <CategoryForm
                    isEdit={true}
                    initialValues={category}
                    onSubmit={handleUpdateCategory}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UpdateCategory;