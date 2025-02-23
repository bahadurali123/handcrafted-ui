import { Helmet } from "react-helmet";
import { TermsAndConditions as TermsAndConditionsComponent } from "../../components/index";

function TermsAndConditions() {
    return (
        <>
            <Helmet>
                <title>Terms and Conditions - Handcrafted</title>
                <meta name="description" content="Review the terms and conditions for using Handcrafted's services and purchasing our products." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/terms-conditions" />
            </Helmet>
            <TermsAndConditionsComponent />
        </>
    )
}

export default TermsAndConditions;