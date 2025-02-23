import { Helmet } from "react-helmet";
import { StripeButton as StripeButtonsComponent } from "../../components/index";

function StripeButton() {
    return (
        <>
            <Helmet>
                <title>Stripe Payment - Handcrafted</title>
                <meta name="description" content="Securely complete your payment using Stripe." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/stripe" />
            </Helmet>
            <StripeButtonsComponent />
        </>
    )
}

export default StripeButton;