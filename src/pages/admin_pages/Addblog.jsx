import { Helmet } from "react-helmet";
import { AddBlog as AddBlogComponent } from "../../components/index";

function AddBlog() {
    return (
        <>
            <Helmet>
                <title>Add New Blog | Handcrafted Admin</title>
                <meta name="description" content="Create and publish a new blog post for Handcrafted. Share insights, updates, and stories with your audience." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/blog/add" />
            </Helmet>
            <AddBlogComponent />
        </>
    )
}

export default AddBlog;