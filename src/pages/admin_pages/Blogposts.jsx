import { Helmet } from "react-helmet";
import { BlogPosts as BlogPostsComponent } from "../../components/index";

function BlogPosts() {
    return (
        <>
            <Helmet>
                <title>Manage Blog Posts | Handcrafted Admin</title>
                <meta name="description" content="View, edit, or delete existing blog posts. Keep your content fresh and engaging." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/blogs" />
            </Helmet>
            <BlogPostsComponent />
        </>
    )
}

export default BlogPosts;