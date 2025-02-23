import { Helmet } from "react-helmet";
import { UpdateBlog as UpdateBlogComponent } from "../../components/index";

function UpdateBlog() {
    return (
        <>
            <Helmet>
                <title>Update Blog Post | Handcrafted Admin</title>
                <meta name="description" content="Edit and update existing blog content to keep your audience engaged and informed." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/blog/update" />
            </Helmet>
            <UpdateBlogComponent />
        </>
    )
}

export default UpdateBlog;