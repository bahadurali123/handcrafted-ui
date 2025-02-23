import { Helmet } from "react-helmet";
import { AboutPage as AboutPageComponent } from "../../components/index";

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About Us - Handcrafted</title>
                <meta name="description" content="Learn more about Handcrafted, our mission, and our commitment to delivering unique handmade products." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/about" />
            </Helmet>
            <AboutPageComponent />
        </>
    )
}

export default AboutPage;