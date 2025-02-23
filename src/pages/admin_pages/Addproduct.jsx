import { Helmet } from "react-helmet";
import { AddProduct as AddProductComponent } from "../../components/index";

function AddProduct() {
    return (
        <>
            <Helmet>
                <title>Add New Product | Handcrafted Admin</title>
                <meta name="description" content="List a new handcrafted product. Provide details, images, and pricing information." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/product/add" />
            </Helmet>
            <AddProductComponent />
        </>
    )
}

export default AddProduct;