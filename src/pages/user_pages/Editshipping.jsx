import { Helmet } from "react-helmet";
import { EditShipping as EditShippingComponent } from "../../components/index";

function EditShipping() {
    return (
        <>
            <Helmet>
                <title>Edit Shipping Address - Handcrafted</title>
                <meta name="description" content="Update your shipping address details for faster deliveries." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/shipping/edit" />
            </Helmet>
            <EditShippingComponent />
        </>
    )
}

export default EditShipping;