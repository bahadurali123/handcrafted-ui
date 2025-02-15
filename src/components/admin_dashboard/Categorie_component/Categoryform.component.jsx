import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from "../../index";
import "../../../styles/Components/admin/Productform.css"
import { useSelector } from 'react-redux';


const CategoryForm = ({ isEdit = false, initialValues = {}, onSubmit }) => {
    // const { status: categoryStatus } = useSelector((state) => state.category);
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue, // For setting initial values when updating
    } = useForm({
        defaultValues: {
            name: initialValues[0]?.name || "",
            parentId: initialValues[0]?.parentId || ""
        }, // Pre-populate fields if initialValues are passed
    });
    // defaultValues: initialValues, // Pre-populate fields if initialValues are passed

    // console.log("Category Form Data: ", isEdit, initialValues);
    // const categories = ['Home Decor', 'Electronics', 'Furniture', 'Clothing']; // Example categories

    React.useEffect(() => {
        if (isEdit && initialValues) {
            // Set initial values if editing
            // Object.keys(initialValues).forEach((field) => {
            //     console.log("Fields: ", field, initialValues[field]?.name);
            //     setValue(field, initialValues[field]?.name);
            // });


            // initialValues.forEach((field) => {
            //     console.log("Fields: ", field);
            //     setValue(field, initialValues[field]);
            // });
        }
    }, [isEdit, initialValues, setValue]);

    return (
        <div className="add-product-container">
            <h1>{isEdit ? "Update Category" : "Add Category"}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="add-product-form">
                <Input
                    label="Category Name"
                    placeholder="Add Category Name"
                    type="text"
                    {...register('name', { required: 'Category Name is required' })}
                    error={errors.name?.message}
                />

                <div className="full-width">
                    <label>Category</label>
                    <select
                        // {...register('category', { required: 'Category is required' })}
                        {...register('parentId')}
                        className={`select-input ${errors.parentId ? 'has-error' : ''}`}
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    {errors.parentId && <p className="error-message">{errors.parentId.message}</p>}
                </div>
                <Input
                    label="Image:"
                    type="file"
                    {...register('image')}
                // {...register('image', { required: 'Image is required' })}
                />
                {/* {errors.image && <p className="error-message">{errors.image.message}</p>} */}

                <div className="btn-row">
                    <Button
                        type='submit'
                    >
                        {isEdit ? "Update" : "Upload"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CategoryForm;