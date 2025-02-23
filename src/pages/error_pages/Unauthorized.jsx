import { Helmet } from "react-helmet";
import { UnauthorizedPage as UnauthorizedErrorComponent } from "../../components/index";

function Unauthorized() {
    return (
        <>
            <Helmet>
                <title>401 - Unauthorized | Handcrafted</title>
                <meta name="description" content="You must be logged in to access this page. Please sign in to continue." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/error/401" />
            </Helmet>
            <UnauthorizedErrorComponent />
        </>
    )
}

export default Unauthorized;