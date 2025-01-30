import { Button } from "../index";
import '../../styles/Error_pages/Errorpage.css';
import { useNavigate } from "react-router-dom";

const ServerErrorPage = () => {
        const navigate = useNavigate();
    
        const handleGoBack = () => {
            navigate('/terms-conditions');
        };

    return (
        <div className="error-page">
            <img src="/internal-error-1.png" alt="Broken Tools" />
            <h1>Our workshop needs a quick fix.</h1>
            <p>We're sorry, something went wrong. Please check back later.</p>
            <Button onClick={handleGoBack}  type='button'>Contact Support</Button>
        </div>
    );
};

export default ServerErrorPage;