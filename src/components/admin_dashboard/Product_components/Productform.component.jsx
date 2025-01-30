import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from "../../index";
import "../../../styles/Components/admin/Productform.css"
import { useSelector } from 'react-redux';
import config from '../../../../config/configuration';

const ProductForm = ({ isEdit = false, initialValues = {}, onSubmit }) => {
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    const totalImages = initialValues[0]?.images.length || 0;
    console.log("Images length: ", totalImages);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue, // For setting initial values when updating
    } = useForm({
        defaultValues: {
            name: initialValues[0]?.name || "",
            description: initialValues[0]?.description || "",
            price: initialValues[0]?.price || "",
            categoryId: initialValues[0]?.categoryId || "",
            stockQuantity: initialValues[0]?.stockQuantity || "",
            colors: initialValues[0]?.colors || "",
            weight: initialValues[0]?.weight || "",
            length: initialValues[0]?.length || "",
            width: initialValues[0]?.width || "",
            height: initialValues[0]?.height || "",
            featured: initialValues[0]?.featured || "",
        },
    });

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
    // const filteredCategories = filterHierarchy(categories, "6728d5ec46ad752365cab7c9");
    const filteredCategories = filterHierarchy(categories, config.productCategoryId);
    console.log("hierarchy 1", filteredCategories);

    return (
        <div className="add-product-container">
            <h1>{isEdit ? "Update Product" : "Add Product"}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="add-product-form">
                <Input
                    label="Product Name"
                    placeholder="Add Product Name"
                    type="text"
                    {...register('name', { required: 'Product Name is required', })}
                    error={errors.name?.message}
                    fullWidth
                />
                <div className="text-area">
                    <label>Product Description</label>
                    <textarea
                        placeholder="Add Product Description"
                        {...register('description')}
                    ></textarea>
                </div>

                <div className="form-row">
                    <Input
                        label="Price"
                        placeholder="Add Price"
                        type="number"
                        step="0.01"
                        {...register('price', { required: 'Price is required' })}
                        error={errors.price?.message}
                    />

                    <div className="form-col">
                        <label>Category</label>
                        <select
                            {...register('categoryId', { required: 'Category is required' })}
                            className={`select-input ${errors.categoryId ? 'has-error' : ''}`}
                        >
                            <option value="">Select Category</option>
                            {filteredCategories.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                        {errors.categoryId && <p className="error-message">{errors.categoryId.message}</p>}
                    </div>
                </div>

                <div className="form-row">
                    <Input
                        label="Stock"
                        placeholder="Add Stock Quantity"
                        type="number"
                        {...register('stockQuantity', { required: 'Stock is required' })}
                        error={errors.stockQuantity?.message}
                    />

                    <Input
                        label="Colors"
                        placeholder="Add Colors (comma separated)"
                        type="text"
                        {...register('colors')}
                    />
                </div>

                <div className="form-row">
                    <Input
                        label="Weight (Kg)"
                        placeholder="Add Weight"
                        type="number"
                        step="0.1"
                        {...register('weight')}
                    />
                    <Input
                        label="Length (cm)"
                        placeholder="Add Length"
                        type="number"
                        {...register('length')}
                    />
                </div>

                <div className="form-row">
                    <Input
                        label="Width (cm)"
                        placeholder="Add Width"
                        type="number"
                        {...register('width')}
                    />
                    <Input
                        label="Height (cm)"
                        placeholder="Add Height"
                        type="number"
                        {...register('height')}
                    />
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label>Upload Product Image</label>
                        <input
                            type="file"
                            multiple
                            {...register('images', isEdit ? {
                                validate: (files) => {
                                    if (files.length > (4 - totalImages)) {
                                        return `You can upload a maximum of ${4 - totalImages} files.`;
                                    }
                                    return true;
                                },
                            } : {
                                required: 'Please upload at least one file.',
                                validate: (files) => {
                                    if (files.length > 4) {
                                        return 'You can upload a maximum of 4 files.';
                                    }
                                    return true;
                                },
                            })}
                        />
                        {errors.images && <p className="error-message">{errors.images.message}</p>}
                    </div>
                    <div className="form-col">
                        <Input
                            label="Featured Product"
                            type="checkbox"
                            {...register('featured')}
                        />
                    </div>
                </div>

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

export default ProductForm;