import React from 'react';
import { Button } from "../index";
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/account/orders');
    };

    return (
        <div className="error-page">
            <img src="/payment_success.jfif" alt="Successful" />
            <h1>Payment Successful!</h1>
            <p>Thank you for your purchase.</p>
            <Button onClick={handleClick} type="button">All Orders</Button>
        </div>
    )
};

export default OrderSuccess;