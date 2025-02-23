import { Helmet } from "react-helmet";
import { OrderCancel as OrderCancelComponent } from "../../components/index";

function OrderCancel() {
    return (
        <>
            <Helmet>
                <title>Order Cancelled - Handcrafted</title>
                <meta name="description" content="Your order has been successfully cancelled. Contact us for more assistance." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/order/cancel" />
            </Helmet>
            <OrderCancelComponent />
        </>
    )
}

export default OrderCancel;