import { Helmet } from "react-helmet";
import { UpdateProduct as UpdateProductComponent } from "../../components/index";

function UpdateProduct() {
    return (
        <>
            <Helmet>
                <title>Update Product | Handcrafted Admin</title>
                <meta name="description" content="Edit product details, update pricing, and manage images for your handcrafted listings." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/product/update" />
            </Helmet>
            <UpdateProductComponent />
        </>
    )
}

export default UpdateProduct;