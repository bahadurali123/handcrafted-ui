import { CartProduct, ProductComponent, Button, NoData } from "../index";
import '../../styles/Ui/Shoppingcart.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Dummy data for cart suggested products

const suggestedProducts = [
    {
        id: 1,
        name: 'Product Name',
        price: 500,
        imageUrl: '/Handcrafted_Table.jpg',
    },
    {
        id: 1,
        name: 'Product Name',
        price: 500,
        imageUrl: '/Handcrafted_Table.jpg',
    },
    {
        id: 1,
        name: 'Product Name',
        price: 500,
        imageUrl: '/Handcrafted_Table.jpg',
    },
];

// Main ShoppingCart Component
const ShoppingCart = () => {
    const navigate = useNavigate();
    const imageSrc = "/Handcrafted.png";
    const cartdata = useSelector((state) => state.cart);
    const cartproducts = cartdata.cart;

    const navigateCheckout = async () => {
        try {
            navigate('/checkout');
        } catch (error) {
            console.log(error);
        }
    };

    // console.log("cart data: ", cartdata);
    // console.log("cart products: ", cartproducts);
    return (
        <div className="shopping-cart">
            <h1 className="shopping-cart__title">Shopping Cart</h1>
            {cartproducts.length === 0 ? (
                <NoData
                    type="cart"
                    message="Cart Is Empty"
                    imageSrc={imageSrc}
                />
            ) : (
                <div className="shopping-cart__content">

                    {/* Left Part */}
                    <div className="shopping-cart__left">
                        {/* Cart Products */}
                        <div className="cart-products">
                            {cartproducts.map(item => (
                                <CartProduct key={item._id} product={item} />
                            ))}
                        </div>

                        {/* Subtotal and Checkout Section */}
                        <div className="cart-summary">
                            <div className="cart-summary__details">
                                <p>Items: {cartdata.totalItems}</p>
                                <p>Items Subtotal: ${(cartdata.totalPrice).toFixed(2)}</p>
                                <p>Shipping Fee: ${(cartdata.totalShipping).toFixed(2)}</p>
                                <p className="cart-summary__total">Subtotal: ${(cartdata.totalPrice + cartdata.totalShipping).toFixed(2)}</p>
                            </div>
                            <Button onClick={navigateCheckout}>proceed to checkout</Button>
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className="shopping-cart__right">
                        <h2>Pair with your cart</h2>
                        <div className='suggested-products'>
                            {suggestedProducts.map((product, index) => (
                                <ProductComponent key={index} name={product.name} price={product.price} imageUrl={product.imageUrl} />
                            ))}
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default ShoppingCart;
