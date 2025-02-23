import { Helmet } from "react-helmet";
import { ForbiddenPage as ForbidderErrorComponent } from "../../components/index";

function Forbidden() {
    return (
        <>
            <Helmet>
                <title>403 - Forbidden | Handcrafted</title>
                <meta name="description" content="Access denied. You don't have permission to view this page." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/error/403" />
            </Helmet>
            <ForbidderErrorComponent />
        </>
    )
}

export default Forbidden;