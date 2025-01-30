// import React from "react";
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import config from "../../../config/configuration";
import { useSelector } from "react-redux";

// const stripePromise = loadStripe("your-publishable-key");
const stripePromise = loadStripe(config.stripePublicId);

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#6772e5',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

const StripeButton = () => {
    const cartdata = useSelector((state) => state.cart);
    // const handlePayment = () => {
    //     alert("Stripe payment initiated (integration details depend on backend setup).");
    // };
    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // const { cart } = cartdata;
        const { cart, totalPrice } = cartdata;
        // const data = {
        //     totalprice: 25,
        //     name: 'xyz'
        // }
        // Create a checkout session via the backend
        const response = await axios.post(`${config.backendBaseUrl}/create-checkout-session`, { cart, totalPrice }, { withCredentials: true, });

        console.log("Stripe Checkout: ", response);
        // Redirect to Stripe Checkout
        const { id } = response.data;
        const result = await stripe.redirectToCheckout({ sessionId: id });
        console.log("Resurls: ", result);

        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        // <div className="payment-container">
        //     <h2>Stripe</h2>
        //     <Elements stripe={stripePromise}>
        //         <button className="stripe-button" onClick={handlePayment}>
        //             Pay with Stripe
        //         </button>
        //     </Elements>
        // </div>

        <div className="payment-container">
            <button onClick={handleCheckout} style={buttonStyle}>
                Buy Now
            </button>
        </div>
    );
};

export default StripeButton;