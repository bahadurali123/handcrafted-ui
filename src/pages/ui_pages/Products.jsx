import { Helmet } from "react-helmet";
import { ProductsPage as ProductsComponent } from "../../components/index";

function ProductsPage() {
    return (
        <>
            <Helmet>
                <title>All Products - Handcrafted</title>
                <meta name="description" content="Browse our collection of handcrafted products, made with care and creativity." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/shop/products" />
            </Helmet>
            <ProductsComponent />
        </>
    )
}

export default ProductsPage;