import { Helmet } from "react-helmet";
import { ServiceUnavailablePage as ServiceUnavailableErrorComponent } from "../../components/index";

function ServiceUnavailable() {
    return (
        <>
            <Helmet>
                <title>503 - Service Unavailable | Handcrafted</title>
                <meta name="description" content="Our service is temporarily unavailable. Please check back soon." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/error/503" />
            </Helmet>
            <ServiceUnavailableErrorComponent />
        </>
    )
}

export default ServiceUnavailable;