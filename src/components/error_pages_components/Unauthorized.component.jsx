import { Button } from "../index";
import '../../styles/Error_pages/Errorpage.css';
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/auth/login');
    };

    return (
        <div className="error-page">
            <img src="/Unauthorized-2.jpg" alt="Membership Card" />
            <h1>You need to log in</h1>
            <p>Please sign in to access this page.</p>
            <Button onClick={handleGoBack} type="button">Log In</Button>
        </div>
    );
};

export default UnauthorizedPage;