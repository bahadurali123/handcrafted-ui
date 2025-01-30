import { useNavigate } from 'react-router-dom';
import '../../styles/Error_pages/Errorpage.css';
import { Button } from '../index';

const ServiceUnavailablePage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };


    return (
        <div className="error-page">
            <img src="/service_unavailable_1.png" alt="Workshop Closed" />
            <h1>We're currently unavailable</h1>
            <p>Our team is working hard to bring the service back online.</p>
            <p>Please check back later.</p>
            <Button onClick={handleGoBack} type='button'>Take Me Home</Button>
        </div>
    );
};

export default ServiceUnavailablePage;