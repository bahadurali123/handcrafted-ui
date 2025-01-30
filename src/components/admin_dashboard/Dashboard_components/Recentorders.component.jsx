import { NoData, RecentOrderItem } from "../../index";
import "../../../styles/Components/admin/Recentorderitem.css"
import { useSelector } from 'react-redux';

const RecentOrders = () => {
    const imageSrc = "/Handcrafted.png";
    const orderdata = useSelector((state) => state.orders);
    const ordersList = orderdata.orders.ordersData.orders;
    // console.log("Orders List in history: ", ordersList);

    const orders = ordersList.slice(0, 5);
    console.log("Admin Orders: ", orders,);

    return (
        <div className="recent-orders-container">
            <h3>Recent Orders</h3>
            <table className="orders-table">
                {orders.length === 0 ? (
                    <NoData
                        type="orders"
                        message="No Orders Exist"
                        imageSrc={imageSrc}
                    />
                ) :
                    <>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>User Name</th>
                                <th>Products</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <RecentOrderItem key={index} order={order} />
                            ))}
                        </tbody>
                    </>
                }
            </table>
        </div>
    );
};

export default RecentOrders;