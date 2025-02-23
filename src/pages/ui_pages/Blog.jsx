import { Helmet } from "react-helmet";
import { BlogPage as BlogPageComponent } from "../../components/index";

function BlogPage() {
    return (
        <>
            <Helmet>
                <title>Blog Post - Handcrafted</title>
                <meta name="description" content="Read insightful articles and stories about handmade products, craftsmanship, and creative inspiration." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/blog/:slug" />
            </Helmet>
            <BlogPageComponent />
        </>
    )
}

export default BlogPage;