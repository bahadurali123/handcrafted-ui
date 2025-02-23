import { Helmet } from "react-helmet";
import { AdminOrder as AdminOrderComponent } from "../../components/index";

function AdminOrder() {
    return (
        <>
            <Helmet>
                <title>Order Details | Handcrafted Admin</title>
                <meta name="description" content="View detailed information for individual orders, including status, items, and customer details." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/order" />
            </Helmet>
            <AdminOrderComponent />
        </>
    )
}

export default AdminOrder;