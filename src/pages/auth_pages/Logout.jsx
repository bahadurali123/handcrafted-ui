import { Helmet } from "react-helmet";
import { Logout as LogoutComponent } from "../../components/index";

function Logout() {
    return (
        <>
            <Helmet>
                <title>Logout - Handcrafted</title>
                <meta name="description" content="You have successfully logged out of your Handcrafted account." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/auth/logout" />
            </Helmet>
            <LogoutComponent />
        </>
    )
}

export default Logout;