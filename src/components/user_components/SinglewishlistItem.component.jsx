import React, { useState } from 'react';
import { Button } from "../index";
import { useNavigate } from 'react-router-dom';

const SingleWishlistItem = ({ product, onRemoveFromWishlist }) => {
    const navigate = useNavigate();
    const [inWishlist, setInWishlist] = useState(true);

    const handleWishlistToggle = () => {
        setInWishlist(!inWishlist);
        onRemoveFromWishlist(product._id); // Call function to remove it from wishlist if needed
    };
    const showProduct = () => {
        navigate(`/shop/product/${product._id}`);
    };

    return (
        <tr className="wishlist-item">
            <td className="wishlist-product-img">
                <img src={product.images[0]} alt={product.name} />
            </td>
            <td className="wishlist-product-name">{product.name}</td>
            <td className="wishlist-product-price">{product.price}</td>
            <td>
                <i
                    className={`heart-icon ${inWishlist ? 'bi bi-heart-fill' : 'bi bi-heart'}`}
                    onClick={handleWishlistToggle}
                >
                </i>
            </td>
            <td className="wishlist-product-button">
                <Button
                    type="submit"
                    onClick={showProduct}
                >
                    View
                </Button>
            </td>
        </tr>
    );
};

export default SingleWishlistItem;
