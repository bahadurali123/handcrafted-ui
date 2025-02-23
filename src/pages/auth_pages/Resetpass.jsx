import { Helmet } from "react-helmet";
import { Resetpass as ResetPassComponent } from "../../components/index";

function ResetPass() {
    return (
        <>
            <Helmet>
                <title>Reset Password - Handcrafted</title>
                <meta name="description" content="Reset your password securely and regain access to your Handcrafted account." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/auth/reset-password" />
            </Helmet>
            <ResetPassComponent />
        </>
    )
}

export default ResetPass;