import { Helmet } from "react-helmet";
import { UpdateCommentStatus as UpdateCommentComponent } from "../../components/index";

function UpdateComment() {
    return (
        <>
            <Helmet>
                <title>Update Comment | Handcrafted Admin</title>
                <meta name="description" content="Manage and edit user comments to maintain a respectful and engaging community." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/comment" />
            </Helmet>
            <UpdateCommentComponent />
        </>
    )
}

export default UpdateComment;