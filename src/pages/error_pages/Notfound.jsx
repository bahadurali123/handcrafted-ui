import { Helmet } from "react-helmet";
import { NotFoundPage as NotFoundComponent } from "../../components/index";

function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Handcrafted</title>
                <meta name="description" content="The page you're looking for doesn't exist. Explore our homepage for more handmade products." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/error/404" />
            </Helmet>
            <NotFoundComponent />
        </>
    )
}

export default NotFound;