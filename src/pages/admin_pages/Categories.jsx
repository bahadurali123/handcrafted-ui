import { Helmet } from "react-helmet";
import { Categories as CategoriesComponent } from "../../components/index";

function Categories() {
    return (
        <>
            <Helmet>
                <title>Manage Categories | Handcrafted Admin</title>
                <meta name="description" content="Organize, update, or remove product categories for better navigation and user experience." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/categories" />
            </Helmet>
            <CategoriesComponent />
        </>
    )
}

export default Categories;