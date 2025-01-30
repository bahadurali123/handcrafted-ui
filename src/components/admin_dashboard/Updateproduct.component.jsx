import React, { useEffect, useState } from 'react';
import { ProductForm } from '../index';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import productService from '../../../services/product.service';
import { updateProduct } from '../../store/slices/Product.slice';

const UpdateProduct = () => {
    const productId = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;
    console.log("Blog posts: ", products, productId);
    const product = products.filter(item => item._id === productId.productId);
    console.log("Blog Post for edit is: ", product);


    const handleUpdateProduct = async (data) => {
        console.log("Product Updated:", data);


        const formData = new FormData();
        console.log("Product images: ", [...data.images]);
        // const colors = data.colors.split(', ');
        // console.log("Collers: ", colors);

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("categoryId", data.categoryId);
        formData.append("stockQuantity", data.stockQuantity);
        // formData.append("colors", (data.colors).split(', '));
        // formData.append("colors", colors);
        formData.append("colors", data.colors);
        formData.append("weight", data.weight);
        formData.append("length", data.length);
        formData.append("width", data.width);
        formData.append("height", data.height);
        // formData.append("images", data.images[0]);
        formData.append("featured", data.featured);

        for (let i = 0; i < data.images.length; i++) {
            formData.append("images", data.images[i]);
        }

        console.log("FormData", formData);

        try {
            const response = await productService.updateProduct(product[0]._id, formData);
            console.log("In Update Product: ", response);
            console.log("In Update Product data: ", response.data);
            if (response) {
                const productData = response.data;
                if (productData) {
                    dispatch(updateProduct({ productData }));
                }
                navigate(`/admin/products`)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {product ? (
                <ProductForm
                    isEdit={true}
                    initialValues={product}
                    onSubmit={handleUpdateProduct}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UpdateProduct;