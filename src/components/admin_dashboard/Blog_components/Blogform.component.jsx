import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from "../../index";
import "../../../styles/Components/admin/Addblog.css"
import { useSelector } from 'react-redux';
import RTE from '../../Other_components/RTE.component';

const BlogForm = ({ isEdit = false, initialValues = {}, onSubmit }) => {
    console.log("Blog initial values: ", initialValues);

    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;

    function filterHierarchy(categories, parentName) {
        const result = [];
        const findChildren = (parentId) => {
            // Find all children of the current parent
            const children = categories.filter(category => category.parentId === parentId);
            result.push(...children); // Add them to the result array
            children.forEach(child => findChildren(child._id)); // Recursively find their children
        };

        // Find and add the parent by name
        const parent = categories.find(category => category.name === parentName);
        if (parent) {
            result.push(parent); // Add the parent to the result array
            findChildren(parent._id); // Start finding its children
        }

        return result;
    }
    const filteredCategories = filterHierarchy(categories, "Blog");
    console.log("hierarchy 1", filteredCategories);

    const { register, handleSubmit, setValue, getValues, watch, control, formState: { errors } } = useForm({
        defaultValues: {
            title: initialValues[0]?.title || "",
            slug: initialValues[0]?.slug || "",
            metaDesc: initialValues[0]?.metaDesc || "",
            content: initialValues[0]?.content || "",
            // image: initialValues[0]?.image || "",
            categoryId: initialValues[0]?.categoryId || "",
            // publishedAt: initialValues[0]?.publishedAt ? initialValues[0]?.publishedAt.split('T')[0] : '',
            publishedAt: initialValues[0]?.publishedAt?.split('T')[0] || '',
            status: initialValues[0]?.status || "",
        }, // Pre-populate fields if initialValues are passed
    });

    const slugTransformation = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/\s/g, '-')

        return ''
    }, [])

    React.useEffect(() => {
        if (isEdit && initialValues) {
            // // Set initial values if editing
            // Object.keys(initialValues).forEach((field) => {
            //     setValue(field, initialValues[field]);
            // });
        }

        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug',
                    slugTransformation(value.title),
                    { shouldValidate: true })
            }
        });

        return () => {
            subscription.unsubscribe()
        }

    }, [isEdit, initialValues, slugTransformation, setValue, watch]);

    return (
        <div className="add-blog-container">
            <h1>{isEdit ? "Update Blog" : "Add Blog"}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Title */}
                <div className="form-group full-width">
                    <Input
                        label="Title:"
                        type="text"
                        placeholder="Add Title"
                        {...register('title', { required: 'Title is required' })}
                    />
                    {errors.title && <p className="error-message">{errors.title.message}</p>}
                </div>

                {/* Slug */}
                <div className="form-group full-width">
                    <Input
                        label="Slug:"
                        type="text"
                        placeholder="Add Slug"
                        {...register('slug', { required: 'Slug is required' })}
                        onInput={(e) => {
                            setValue("slug", slugTransformation(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    {errors.title && <p className="error-message">{errors.title.message}</p>}
                </div>

                {/* Meta Description */}
                <div className="form-group full-width">
                    <Input
                        label="Meta Description:"
                        type="text"
                        placeholder="Add Meta Description"
                        {...register('metaDesc', { required: 'Meta description is required' })}
                    />
                    {errors.metaDesc && <p className="error-message">{errors.metaDesc.message}</p>}
                </div>

                {/* Content */}
                <div className="form-group full-width">
                    <label>Content:</label>
                    <RTE name="content" control={control} defaultValue={getValues("content")} />
                    {errors.content && <p className="error-message">{errors.content.message}</p>}
                </div>

                {/* Image and Category in one row */}
                <div className="form-group row">
                    <div className="form-group">
                        <Input
                            label="Image:"
                            type="file"
                            {...register('image')}
                        // {...register('image', { required: 'Image is required' })}
                        />
                        {errors.image && <p className="error-message">{errors.image.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <select  {...register('categoryId', { required: 'Category is required' })}>
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

                {/* Schedule and Status in one row */}
                <div className="form-group row">
                    <div className="form-group">
                        <Input
                            label="Schedule:"
                            type="date"
                            {...register('publishedAt')}
                        // defaultValue={initialValues[0]?.publishedAt ? initialValues[0]?.publishedAt.split('T')[0] : ''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status:</label>
                        <select {...register('status', { required: 'Status is required' })}>
                            <option value="">Select Status</option>
                            <option value="published">Published</option>
                            <option value="unpublish">Unpublish</option>
                            <option value="draft">Draft</option>
                        </select>
                        {errors.status && <p className="error-message">{errors.status.message}</p>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="form-group full-width btn-section">
                    <Button
                        type='submit'
                    >
                        {/* Upload */}
                        {isEdit ? "Update" : "Upload"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default BlogForm;