import { Helmet } from "react-helmet";
import { Products as ProductsComponent } from "../../components/index";

function Products() {
    return (
        <>
            <Helmet>
                <title>Manage Products | Handcrafted Admin</title>
                <meta name="description" content="Edit, update, or remove products from your Handcrafted store’s inventory." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/products" />
            </Helmet>
            <ProductsComponent />
        </>
    )
}

export default Products;