import { Helmet } from "react-helmet";
import { Checkout as CheckoutComponent } from "../../components/index";

function Checkout() {
    return (
        <>
            <Helmet>
                <title>Checkout - Handcrafted</title>
                <meta name="description" content="Securely complete your purchase of unique handmade products from Handcrafted." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/checkout" />
            </Helmet>
            <CheckoutComponent />
        </>
    )
}

export default Checkout;