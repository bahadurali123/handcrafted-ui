import { Helmet } from "react-helmet";
import { PaypalButtons as PaypalButtonsComponent } from "../../components/index";

function PaypalButtons() {
    return (
        <>
            <Helmet>
                <title>PayPal Payment - Handcrafted</title>
                <meta name="description" content="Complete your payment securely using PayPal." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/paypal" />
            </Helmet>
            <PaypalButtonsComponent />
        </>
    )
}

export default PaypalButtons;