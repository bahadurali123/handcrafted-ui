import { HomePage as HomePageComponent } from "../../components/index";
import { Helmet } from "react-helmet";

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Handcrafted - Unique Handmade Products</title>
                <meta name="description" content="Discover beautifully crafted handmade products that bring elegance and uniqueness to your space." />
                <meta name="keywords" content="handmade, handcrafted, unique gifts, art, crafts" />
                <link rel="canonical" href="https://hand-crafted.vercel.app" />
            </Helmet>
            <HomePageComponent />
        </>
    )
}

export default HomePage;