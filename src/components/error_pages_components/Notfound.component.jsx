import React from 'react';
import { Button } from "../index";
import '../../styles/Error_pages/Errorpage.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="error-page">
            <img src="/not-found-1.jpg" alt="Lost Explorer" />
            <h1>Oops! You seem lost.</h1>
            <p>Don't worry, we can help you find your way back.</p>
            <Button onClick={handleGoBack} type='button'>Take Me Home</Button>
        </div>
    );
};

export default NotFoundPage;