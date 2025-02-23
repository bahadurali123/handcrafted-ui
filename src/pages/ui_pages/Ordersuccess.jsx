import { Helmet } from "react-helmet";
import { OrderSuccess as OrderSuccessComponent } from "../../components/index";

function OrderSuccess() {
    return (
        <>
            <Helmet>
                <title>Order Successful - Handcrafted</title>
                <meta name="description" content="Thank you for your purchase! Your order has been successfully placed." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/order/success" />
            </Helmet>
            <OrderSuccessComponent />
        </>
    )
}

export default OrderSuccess;