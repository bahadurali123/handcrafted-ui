import { Helmet } from "react-helmet";
import { Signup as SignupComponent } from "../../components/index";

function Signup() {
    return (
        <>
            <Helmet>
                <title>Sign Up - Handcrafted</title>
                <meta name="description" content="Create a new account with Handcrafted and start exploring unique handmade products today." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/auth/signup" />
            </Helmet>
            <SignupComponent />
        </>
    )
}

export default Signup;