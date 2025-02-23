import { Helmet } from "react-helmet";
import { Orders as OrdersComponent } from "../../components/index";

function Orders() {
    return (
        <>
            <Helmet>
                <title>Your Orders - Handcrafted</title>
                <meta name="description" content="Track and manage your past and current orders from Handcrafted." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/orders" />
            </Helmet>
            <OrdersComponent />
        </>
    )
}

export default Orders;