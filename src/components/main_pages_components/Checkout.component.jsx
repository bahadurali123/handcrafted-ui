import React from 'react';
import '../../styles/Ui/Checkout.css'
import { Button } from '../index';
import { useSelector } from 'react-redux';
import fedexService from '../../../services/fedex.service';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const cartdata = useSelector((state) => state.cart);
    const cartproducts = cartdata.cart;

    const handlePaymentSelect = (method) => {
        // console.log(`Selected payment method: ${method}`);
        navigate(`/${method}`);
    };

    return (
        <div className="checkout-page">
            <h1 className="checkout-title">Checkout</h1>
            <div className="checkout-container">
                <div className="left-area">
                    <div className="product-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Shipping</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartproducts.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price}</td>
                                        <td>{product.shippingFee.toFixed(2)}</td>
                                        <td>{product.totalPrice.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="summary">
                            <p>Items: {cartdata.totalItems}</p>
                            <p>Items Subtotal: ${cartdata.totalPrice.toFixed(2)}</p>
                            <p>Shipping Fee: ${cartdata.totalShipping.toFixed(2)}</p>
                            <p>Subtotal: ${(cartdata.totalPrice + cartdata.totalShipping).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="right-area">
                    <div className="payment-method">
                        <h3>Select Method</h3>
                        <Button customStyles={{
                            width: "90%",
                            fontWeight: 700
                        }} onClick={() => handlePaymentSelect('stripe')}>Stripe</Button>
                        <Button customStyles={{
                            width: "90%",
                            fontWeight: 700
                        }} onClick={() => handlePaymentSelect('paypal')}>PayPal</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;