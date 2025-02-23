import { Helmet } from "react-helmet";
import { ShippingAddressesPage as ShippingAddressComponent } from "../../components/index";

function Shippingspage() {
    return (
        <>
            <Helmet>
                <title>Shipping Addresses - Handcrafted</title>
                <meta name="description" content="Manage your shipping addresses for faster and easier checkouts." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/shipping" />
            </Helmet>
            <ShippingAddressComponent />
        </>
    )
}

export default Shippingspage;