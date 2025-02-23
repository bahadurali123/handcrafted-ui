import { Helmet } from "react-helmet";
import { AdminDashboard as AdminDashboardComponent } from "../../components/index";

function AdminDashboard() {
    return (
        <>
            <Helmet>
                <title>Admin Dashboard | Handcrafted</title>
                <meta name="description" content="Overview of store performance, orders, and user activity for Handcrafted administrators." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/dashboard" />
            </Helmet>
            <AdminDashboardComponent />
        </>
    )
}

export default AdminDashboard;