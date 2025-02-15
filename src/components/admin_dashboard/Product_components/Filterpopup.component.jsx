// export default FilterPopup;
import React from 'react';
import { useForm } from "react-hook-form";

import { Button, Input } from "../../index";
import { useDispatch, useSelector } from 'react-redux';
import { setFiltered } from '../../../store/slices/filter.slice';

const FilterPopup = ({ onClose }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;

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
    // console.log("hierarchy 1", filteredCategories);

    const onSubmit = async (data) => {
        // console.log("Hook Form Data is: ", data);
        try {
            // console.log("Products LIst: ", products);
            const filteredProductsList = products.filter(item => {
                return item.name === data?.productname ||
                    item.categoryId === data?.productcategory ||
                    item.price === parseInt(data?.productprice) ||
                    item.stockQuantity === parseInt(data?.productstock)
                // isSameDay(new Date(item.publishedAt), new Date(data?.published));
            });
            // console.log("Filtered Products LIst: ", filteredProductsList);

            if (filteredProductsList) {
                const productData = filteredProductsList;
                if (productData) {
                    dispatch(setFiltered(
                        {
                            name: "Products", // The name of the entity
                            filteredData: productData
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
                <h3>Filter Products</h3>
                <button onClick={onClose} className="close-button">✖</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
                <Input
                    label="Product Name:"
                    type="text"
                    placeholder="Enter Product Name"
                    {...register("productname")}
                />
                <div className="full-width">
                    <label>Category</label>
                    <select
                        {...register('productcategory')}
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
                    label="Price:"
                    type="number"
                    placeholder="Enter Price"
                    {...register("productprice")}
                />
                <Input
                    label="Stock:"
                    type="number"
                    placeholder="Enter Stock"
                    {...register("productstock")}
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
                        onClick={() => setTimeout(onClose, 200)}
                    >
                        Apply Filters
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FilterPopup;