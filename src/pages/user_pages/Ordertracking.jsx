import { Helmet } from "react-helmet";
import { OrderTracking as OrderTrackingComponent } from "../../components/index";

function OrderTrackingpage() {
    return (
        <>
            <Helmet>
                <title>Track Order - Handcrafted</title>
                <meta name="description" content="Track the status of your handcrafted product orders in real-time." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/order/tracking" />
            </Helmet>
            <OrderTrackingComponent />
        </>
    )
}

export default OrderTrackingpage;