import { Button } from "../index";
import '../../styles/Error_pages/Errorpage.css';
import { useNavigate } from "react-router-dom";

const BadRequestPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-2);
    };

    return (
        <div className="error-page">
            <img src="/bad-request-3.png" alt="Bad Request" />
            <h1>Bad Request</h1>
            <p>The server could not understand the request due to invalid syntax.</p>
            <p>Please check your input and try again.</p>
            <Button onClick={handleGoBack} type="button">Go Back</Button>
        </div>
    );
};

export default BadRequestPage;