import { Helmet } from "react-helmet";
import { UserProfile, OrderHistory, Wishlist, ShippingAddress } from "../../components/index";

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Dashboard - Handcrafted</title>
                <meta name="description" content="Manage your orders, account settings, and preferences from your Handcrafted dashboard." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/dashboard" />
            </Helmet>
            <UserProfile />
            <OrderHistory />
            <Wishlist />
            <ShippingAddress />
        </>
    )
}

export default Dashboard;