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
    // const createShipp = async () => {
    //     const { cart, totalItems, totalPrice, totalShipping } = cartdata;
    //     const data = {
    //         // totalItems,
    //         totalPrice,
    //         // totalShipping,
    //         cart
    //     }
    //     console.log("Cart data is: ", data);
    //     const response = await fedexService.createShipment(data);
    //     console.log("Cart Shipping response: ", response);
    //     const serviceType = response.data.output.transactionShipments[0].serviceType;
    //     const { currency, deliveryDatestamp, trackingNumber } = response.data.output.transactionShipments[0].pieceResponses[0];
    //     const shipmentDocument = response.data.output.transactionShipments[0]?.shipmentDocuments?.[0]?.url;
    //     const url = response.data.output.transactionShipments[0].pieceResponses[0].packageDocuments[0].url;
    //     const totalCharges = response.data.output.transactionShipments[0].completedShipmentDetail.shipmentRating.shipmentRateDetails[0].totalNetCharge;
    //     const shipdata = {
    //         serviceType,
    //         currency,
    //         deliveryDatestamp,
    //         trackingNumber,
    //         url: shipmentDocument || url,
    //         totalCharges
    //     }
    //     console.log("Shipping data is: ", shipdata);
    // }
    // createShipp();


    // const products = [
    //     { name: 'Product A', quantity: 10, price: 50, shipping: 15, total: 650 },
    //     { name: 'Product B', quantity: 10, price: 50, shipping: 15, total: 650 },
    // ];

    // const summary = {
    //     items: products.length,
    //     subtotal: products.reduce((sum, product) => sum + product.price * product.quantity, 0),
    //     shippingFee: products.reduce((sum, product) => sum + product.shipping, 0),
    //     total: products.reduce((sum, product) => sum + product.total, 0),
    // };

    const handlePaymentSelect = (method) => {
        console.log(`Selected payment method: ${method}`);
        navigate(`/${method}`);
    };

    return (
        // <div className="checkout-container">
        //     <div className="left">
        //         {/* <ProductTable products={products} summary={summary} /> */}
        //         <div className="product-table">
        //             <h2>Checkout</h2>
        //             <table>
        //                 <thead>
        //                     <tr>
        //                         <th>Product Name</th>
        //                         <th>Quantity</th>
        //                         <th>Price</th>
        //                         <th>Shipping</th>
        //                         <th>Total</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {products.map((product, index) => (
        //                         <tr key={index}>
        //                             <td>{product.name}</td>
        //                             <td>{product.quantity}</td>
        //                             <td>{product.price}</td>
        //                             <td>{product.shipping}</td>
        //                             <td>{product.total}</td>
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //             <div className="summary">
        //                 <p>Items: {summary.items}</p>
        //                 <p>Items Subtotal: ${summary.subtotal.toFixed(2)}</p>
        //                 <p>Shipping Fee: ${summary.shippingFee.toFixed(2)}</p>
        //                 <p>Subtotal: ${summary.total.toFixed(2)}</p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="right">
        //         {/* <PaymentMethod onSelect={handlePaymentSelect} /> */}
        //         <div className="payment-method">
        //             <h3>Select Payment Method</h3>
        //             {/* <button onClick={() => onSelect('Stripe')}>Stripe</button>
        //             <button onClick={() => onSelect('PayPal')}>PayPal</button> */}
        //             <button onClick={handlePaymentSelect('Stripe')}>Stripe</button>
        //             <button onClick={handlePaymentSelect('PayPal')}>PayPal</button>
        //         </div>
        //     </div>
        // </div>
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
                                {/* {products.map((product, index) => ( */}
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
                            {/* <p>Items: {summary.items}</p>
                            <p>Items Subtotal: ${summary.subtotal.toFixed(2)}</p>
                            <p>Shipping Fee: ${summary.shippingFee.toFixed(2)}</p>
                            <p>Subtotal: ${summary.total.toFixed(2)}</p> */}
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