import React, { useState } from 'react';
import { Button } from "../../index";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import productService from '../../../../services/product.service';
import { deleteProduct } from '../../../store/slices/Product.slice';

const ProductRow = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showActions, setShowActions] = useState(false);
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;

    const category = categories.filter(cat => cat._id === product.categoryId).map(cat => cat.name);
    const DeleteExistingProduct = async () => {
        try {
            const response = await productService.deleteProduct(product._id);
            if (response) {
                if (response.data) {
                    const productId = product._id;
                    dispatch(deleteProduct({ productId }));
                }
            }
        } catch (error) {
            console.log(error);
        }
        setShowActions(!showActions)
    }
    return (
        <tr>
            <td><img src={product.images?.[0]} alt={product.name} className="product-image" /></td>
            <td>{product.name}</td>
            <td>{category}</td>
            <td>{product.price}</td>
            <td>{product.stockQuantity}</td>
            <td>
                <button className="actions-button" onClick={() => setShowActions(!showActions)}>
                    <i className="bi bi-three-dots-vertical"></i>
                </button>

                {/* Before removing ActionsPopup delete its sapred file. but dont delete if below btn system not work */}
                {showActions && (
                    <div className="actions-popup">
                        <Button
                            type='button'
                            onClick={() => navigate(`/admin/product/update/${product._id}`)}>Update
                        </Button>
                        <Button
                            type='button'
                            onClick={DeleteExistingProduct}>Delete
                        </Button>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default ProductRow;