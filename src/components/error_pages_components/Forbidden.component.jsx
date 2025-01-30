import { Button } from "../index";
import '../..//styles/Error_pages/Errorpage.css'
import { useNavigate } from "react-router-dom";

const ForbiddenPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/terms-conditions');
    };

    return (
        <div className="error-page">
            <img src="/Forbidden-1.png" alt="Forbidden Door" />
            <h1>Access Denied</h1>
            <p>It seems you're not allowed here. Please check your permissions or contact support.</p>
            <Button onClick={handleGoBack} type="button">Contact Support</Button>
        </div>
    );
};

export default ForbiddenPage;