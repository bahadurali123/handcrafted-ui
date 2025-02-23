import { Helmet } from "react-helmet";
import { AdminOrders as AdminOrdersComponent } from "../../components/index";

function AdminOrders() {
    return (
        <>
            <Helmet>
                <title>Manage Orders | Handcrafted Admin</title>
                <meta name="description" content="Track, update, or fulfill customer orders efficiently from the Handcrafted admin panel." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/orders" />
            </Helmet>
            <AdminOrdersComponent />
        </>
    )
}

export default AdminOrders;