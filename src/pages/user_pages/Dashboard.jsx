import { UserProfile, OrderHistory, Wishlist, ShippingAddress } from "../../components/index";

function Dashboard() {
    return (
        <>
            <UserProfile />
            <OrderHistory />
            <Wishlist />
            <ShippingAddress />
        </>
    )
}

export default Dashboard;