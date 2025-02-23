import { Helmet } from "react-helmet";
import { UpdateCategory as UpdateCategoryComponent } from "../../components/index";

function UpdateCategory() {
    return (
        <>
            <Helmet>
                <title>Update Category | Handcrafted Admin</title>
                <meta name="description" content="Edit existing product categories to keep your store organized and user-friendly." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/category/update" />
            </Helmet>
            <UpdateCategoryComponent />
        </>
    )
}

export default UpdateCategory;