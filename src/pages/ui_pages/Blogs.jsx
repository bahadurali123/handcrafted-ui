import { Helmet } from "react-helmet";
import { BlogsPage as BlogsPageComponent } from "../../components/index";

function BlogsPage() {
    return (
        <>
            <Helmet>
                <title>Our Blog - Handcrafted</title>
                <meta name="description" content="Explore our blog for the latest news, tips, and trends in the world of handcrafted products." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/blogs" />
            </Helmet>
            <BlogsPageComponent />
        </>
    )
}

export default BlogsPage;