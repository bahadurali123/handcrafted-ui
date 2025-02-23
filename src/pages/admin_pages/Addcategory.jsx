import { Helmet } from "react-helmet";
import { AddCategory as AddCategoryComponent } from "../../components/index";

function AddCategory() {
    return (
        <>
            <Helmet>
                <title>Add New Category | Handcrafted Admin</title>
                <meta name="description" content="Add a new product category to keep your store organized and easy to navigate." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/category/add" />
            </Helmet>
            <AddCategoryComponent />
        </>
    )
}

export default AddCategory;