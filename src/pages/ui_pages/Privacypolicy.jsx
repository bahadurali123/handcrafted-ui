import { Helmet } from "react-helmet";
import { PrivacyPolicy as PrivacyPolicyComponent } from "../../components/index";

function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy - Handcrafted</title>
                <meta name="description" content="Read about how Handcrafted protects your personal information and data privacy." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/privacy-policy" />
            </Helmet>
            <PrivacyPolicyComponent />
        </>
    )
}

export default PrivacyPolicy;