import { Helmet } from "react-helmet";
import { AddShipping as AddShippingComponent } from "../../components/index";

function AddShipping() {
    return (
        <>
            <Helmet>
                <title>Add Shipping Address - Handcrafted</title>
                <meta name="description" content="Add a new shipping address for your handcrafted product orders." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/shipping/add" />
            </Helmet>
            <AddShippingComponent />
        </>
    )
}

export default AddShipping;