// export default FilterPopup;
import React from 'react';
import { useForm } from "react-hook-form";

import { Button, Input } from "../../index";
import { useDispatch, useSelector } from 'react-redux';
import categoryService from '../../../../services/category.service';
import { filterCategories } from '../../../store/slices/category.slice';
import { setFiltered } from '../../../store/slices/filter.slice';

const CategoryFilterPopup = ({ onClose }) => {
    const dispatch = useDispatch();
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    const { register, handleSubmit } = useForm();

    const uniqueParentIds = new Set(categories.filter(cat => cat.parentId).map(cat => cat.parentId));
    const parentCategories = categories.filter(cat => uniqueParentIds.has(cat._id));
    // console.log("Filtered Categories: ", filteredCategories);
    console.log("Filtered Categories: ", parentCategories);

    const onSubmit = async (data) => {
        console.log("Category filter Form Data is: ", data);
        try {
            console.log("Categories LIst: ", categories);
            const filteredCategoriesList = categories.filter(cat => cat._id === data.category || cat.parentId === data.parentId);
            console.log("Filtered Categories LIst: ", filteredCategoriesList);

            if (filteredCategoriesList) {
                const categoryData = filteredCategoriesList;
                if (categoryData) {
                    dispatch(setFiltered(
                        {
                            name: "categories", // The name of the entity
                            filteredData: categoryData
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
                <h3>Filter Category</h3>
                <button onClick={onClose} className="close-button">✖</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
                <div className="full-width">
                    <label>Category</label>
                    <select
                        {...register('category')}
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="full-width">
                    <label>Parent Category</label>
                    <select
                        {...register('parentId')}
                    >
                        <option value="">Select Category</option>
                        {parentCategories.map((c) => (
                            <option key={c._id} value={c._id}>
                                {c.name}
                            </option>
                        ))}
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
                        onClick={() => setTimeout(onClose, 200)}
                    >
                        Apply Filters
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CategoryFilterPopup;