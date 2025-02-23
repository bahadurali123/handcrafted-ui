import { Helmet } from "react-helmet";
import { BadRequestPage as BadRequestErrorComponent } from "../../components/index";

function BadRequest() {
    return (
        <>
            <Helmet>
                <title>400 - Bad Request | Handcrafted</title>
                <meta name="description" content="Oops! The request could not be understood by the server. Please check and try again." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/error/400" />
            </Helmet>
            <BadRequestErrorComponent />
        </>
    )
}

export default BadRequest;