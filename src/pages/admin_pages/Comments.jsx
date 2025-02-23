import { Helmet } from "react-helmet";
import { Comments as CommentsComponent } from "../../components/index";

function Comments() {
    return (
        <>
            <Helmet>
                <title>Manage Comments | Handcrafted Admin</title>
                <meta name="description" content="Review, approve, or remove comments from blog posts and product reviews." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/comments" />
            </Helmet>
            <CommentsComponent />
        </>
    )
}

export default Comments;