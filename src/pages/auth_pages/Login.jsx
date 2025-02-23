import { Helmet } from "react-helmet";
import { Login as LoginComponent } from "../../components/index";

function Login() {
    return (
        <>
            <Helmet>
                <title>Login - Handcrafted</title>
                <meta name="description" content="Access your Handcrafted account to explore unique handmade products and manage your orders." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/auth/login" />
            </Helmet>
            <LoginComponent />
        </>
    )
}

export default Login;