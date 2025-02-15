import React, { useState } from 'react';
import { ProductComponent, Button } from "../index";
import "../../styles/Ui/Product.css"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fedexService from '../../../services/fedex.service';
import { addCartProduct, clearCart } from '../../store/slices/cart.slice';
import wishlistService from '../../../services/wishlist.service';
import { login } from '../../store/slices/auth.slice';


const ProductPage = () => {
    const productId = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;
    const product = products.filter(item => item._id === productId.productId);
    const relatedproducts = products.filter(item => item.categoryId === product[0].categoryId && item._id !== productId.productId);
    // console.log("Product: ", product, relatedproducts);
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data?.userData;
    const productWishListStatus = logedUser?.wishlist.includes(product[0]._id);

    const [selectedColor, setSelectedColor] = useState("red");
    const [quantity, setQuantity] = useState(1);
    const [shippingfee, setShippingFee] = useState(null);

    const handleColorChange = (color) => setSelectedColor(color);

    const [selectedImage, setSelectedImage] = useState(product[0].images[0]);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    const handleWishChange = async (id) => {
        // console.log("Wishlist Input: ", id);
        try {
            if (logedUser) {
                const response = await wishlistService.addItemToWishlist(id);
                if (response) {
                    const wishlistData = response.data;
                    if (wishlistData) {
                        dispatch(login({ userData: wishlistData }));
                    }
                }
            } else {
                alert("To change your wishlist status, please log in to your account.");
            }
        } catch (error) {
            console.log("WishList Error: ", error);
        }
    };

    const addToCart = () => {
        const data = {
            quantity,
            productColor: selectedColor,
            shippingFee: shippingfee,
            product: product[0]
        }
        // console.log("Cart data is: ", data)
        if (data) {
            if (logedUser) {
                dispatch(addCartProduct(data))
            } else {
                alert("Adding products to your cart requires authorization. Please log in to continue.");
            }
        } else {
            alert("Product data not found!");
        }

    };

    const buyNow = async () => {
        const data = {
            quantity,
            productColor: selectedColor,
            shippingFee: shippingfee,
            product: product[0]
        }
        // console.log("Cart data is: ", data)
        if (data) {
            if (logedUser) {
                await dispatch(clearCart());
                await dispatch(addCartProduct(data))
                navigate('/checkout');
            } else {
                alert("Checkout requires authorization. Please log in or create an account to continue.");
            }
        } else {
            alert("Product data not found!");
        }
    }

    const findRate = async () => {
        if (logedUser) {
            const response = await fedexService.findRate(product[0]._id);
            setShippingFee(response.data.output.rateReplyDetails[0].ratedShipmentDetails[0].totalNetFedExCharge);
        } else {
            alert(
                "You must check for more accuracy:\n" +
                "1. Must be registered.\n" +
                "2. Must have a valid and active shipping address."
            );
        }
    }
    findRate();

    return (
        <div className="product-page">
            {/* Section 1: Product Details */}
            <div className="product-details-section">
                {/* Left Section: Image Gallery */}
                <div className="product-page__left">
                    <div className="image-gallery">
                        <div className="image-gallery__thumbnails">
                            {(product[0].images).map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    onClick={() => setSelectedImage(img)}
                                    className="thumbnail"
                                />
                            ))}
                        </div>
                        <div className="image-gallery__main-image">
                            <img src={selectedImage} alt="Selected" />
                            <i
                                onClick={() => handleWishChange(product[0]._id)}
                                style={{
                                    color: productWishListStatus ? 'red' : 'black'
                                }}
                                className="like-icon bi bi-heart"></i>
                        </div>
                    </div>
                </div>

                {/* Right Section: Product Details */}
                <div className="product-page__right">
                    {/* Product Name */}
                    <h1 className="product-details__title">{product[0].name}</h1>

                    {/* Price and Color Selection */}
                    <div className="product-details__price-colors">
                        <p className="price">${product[0].price}</p>
                        {/* <div className="colors">
                            {(product[0].colors).map((color, idx) => (
                                <span className="color-circle" key={idx} style={{ backgroundColor: color }} onClick={() => handleColorChange(color)}></span>
                            ))}
                        </div> */}
                    </div>

                    {/* Reviews */}
                    <div className="product-details__reviews">
                        <span>From 0 reviews</span>
                        <a href="/reviews" className="reviews-link">Reviews</a>
                    </div>

                    {/* Shipping Information */}
                    <div className="product-details__shipping">
                        <h4>Shipping</h4>
                        <p>Ships from a US warehouse.</p>
                        <p>Shipping fee: ${shippingfee}</p>
                        {/* <p>Estimated delivery by Nov 26 - Dec 5</p> */}
                    </div>

                    {/* Quantity Selector and Action Buttons */}
                    <div className="product-details__quantity-buttons">
                        <div className="quantity-control">
                            <div className="quantity-control-left">
                                <span>{quantity}</span>
                            </div>
                            <div className="quantity-control-right">
                                <button onClick={incrementQuantity}><i className="bi bi-caret-up-fill"></i></button>
                                <button onClick={decrementQuantity}><i className="bi bi-caret-down-fill"></i></button>
                            </div>
                        </div>
                        <Button onClick={addToCart} type="button">Add to Cart</Button>
                        <Button onClick={buyNow} type="button">Buy Now</Button>
                    </div>
                </div>
            </div>


            {/* Section 2: Key Attributes and Description */}
            <div className="product-description-section">
                <div className="attributes">
                    <h3>Key Attributes</h3>
                    <table>
                        <tbody>
                            <tr><td>Type</td><td>Unit</td></tr>
                            <tr><td>Weight</td><td>{product[0].weight} Kg</td></tr>
                            <tr><td>Length</td><td>{product[0].length} Cm</td></tr>
                            <tr><td>Width</td><td>{product[0].width} Cm</td></tr>
                            <tr><td>Height</td><td>{product[0].height} Cm</td></tr>
                            <tr><td>Color</td><td>{product[0].colors}</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="description">
                    <h3>Describe Product</h3>
                    <p>{product[0].description}</p>
                </div>
            </div>

            {/* Section 3: Related Products */}
            <div className="related-products-section">
                <h3>Related Products</h3>
                <div className="related-products">
                    {/* Reusing Product component */}
                    {relatedproducts.map(product => (
                        <>
                            <ProductComponent name={product.name} price={product.price} imageUrl={product.images[0]} />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;