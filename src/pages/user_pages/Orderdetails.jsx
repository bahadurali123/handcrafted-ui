import { Helmet } from "react-helmet";
import { OrderDetails as OrderDetailsComponent } from "../../components/index";

function OrderDetails() {
    return (
        <>
            <Helmet>
                <title>Order Details - Handcrafted</title>
                <meta name="description" content="View detailed information about your handcrafted product order." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/order" />
            </Helmet>
            <OrderDetailsComponent />
        </>
    )
}

export default OrderDetails;