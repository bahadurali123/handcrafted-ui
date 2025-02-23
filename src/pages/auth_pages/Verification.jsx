import { Helmet } from "react-helmet";
import { Verification as VerifyComponent } from "../../components/index";

function Verify() {
    return (
        <>
            <Helmet>
                <title>Account Verification - Handcrafted</title>
                <meta name="description" content="Verify your Handcrafted account to unlock full access and start shopping." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/auth/verify" />
            </Helmet>
            <VerifyComponent />
        </>
    )
}

export default Verify;