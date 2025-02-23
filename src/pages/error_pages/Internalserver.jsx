import { Helmet } from "react-helmet";
import { ServerErrorPage as ServerErrorComponent } from "../../components/index";

function InternalError() {
    return (
        <>
            <Helmet>
                <title>500 - Internal Server Error | Handcrafted</title>
                <meta name="description" content="Something went wrong on our end. We're working on fixing it—please try again later." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/error/500" />
            </Helmet>
            <ServerErrorComponent />
        </>
    )
}

export default InternalError;