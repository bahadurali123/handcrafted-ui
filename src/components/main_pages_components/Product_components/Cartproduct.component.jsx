import { useEffect, useState } from "react";
import { Button } from "../../index";
import { useDispatch } from "react-redux";
import { removeCartProduct, updateProductQuantity } from "../../../store/slices/cart.slice";

// Component for a single cart product item
const CartProduct = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(product.quantity || 1);
    // let updateQuantity;

    const incrementQuantity = async () => {
        setQuantity(quantity + 1);
        // updateQuantity();
        dispatch(updateProductQuantity({ id: product._id, quantity: quantity + 1 }));
    };
    const decrementQuantity = () => {
        quantity > 1 && setQuantity(quantity - 1)
        // updateQuantity();
        dispatch(updateProductQuantity({ id: product._id, quantity: quantity - 1 }));
    };
    const deleteCartProduct = () => {
        console.log("Delete Product: ", product.name);
        dispatch(removeCartProduct({ id: product._id }));
    }
    return (
        <div className="cart-product">
            <img src={product.images[0]} alt="Product" className="cart-product__image" />
            <div className="cart-product__details">
                <p className="cart-product__title">{product.name}</p>
                <p className="cart-product__price">${product.price}</p>
                <div className="product-details__quantity-buttons increment-decrement-btn">
                    <div className="quantity-control">
                        <div className="quantity-control-left">
                            <span>{quantity}</span>
                        </div>
                        <div className="quantity-control-right">
                            <button onClick={incrementQuantity}><i className="bi bi-caret-up-fill"></i></button>
                            <button onClick={decrementQuantity}><i className="bi bi-caret-down-fill"></i></button>
                        </div>
                    </div>
                    <Button onClick={deleteCartProduct} type="button">Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;