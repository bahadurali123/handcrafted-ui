import React from 'react';
import { Button } from "../index";
import { useNavigate } from 'react-router-dom';

const OrderCancel = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="error-page">
            <img src="/payment_canceled.jfif" alt="Canceled" />
            <h1>Payment Canceled!</h1>
            <p>You can try again later.</p>
            <Button onClick={handleClick} type="button">Home</Button>
        </div>
    )
};

export default OrderCancel;