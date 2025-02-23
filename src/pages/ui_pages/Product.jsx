import { Helmet } from "react-helmet";
import { ProductPage as ProductComponent } from "../../components/index";

function ProductPage() {
    return (
        <>
            <Helmet>
                <title>Product Details - Handcrafted</title>
                <meta name="description" content="Explore the details of this handcrafted product, including materials and pricing." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/shop/product" />
            </Helmet>
            <ProductComponent />
        </>
    )
}

export default ProductPage;