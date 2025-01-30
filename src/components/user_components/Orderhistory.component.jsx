import { useNavigate } from 'react-router-dom';
import '../../styles/Components/user/Orderhistory.css';
import { Button, NoData, SingleOrder } from '../index';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
    const navigate = useNavigate();
    const imageSrc = "/Handcrafted.png";
    const orderdata = useSelector((state) => state.orders);
    const ordersList = orderdata.orders.ordersData.orders;
    // console.log("Orders List in history: ", ordersList);

    const orders = ordersList?.slice(0, 5);
    console.log("Orders in history: ", orders,);

    const showOrders = () => {
        console.log("Show orders click");
        navigate('/account/orders');
    }

    return (
        <div className="order-history">
            <h3>Order History</h3>
            <table>
                {orders.length === 0 ? (
                    <NoData
                        type="orders"
                        message="No Orders Found"
                        imageSrc={imageSrc}
                    />
                ) :
                    <>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Date</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Total Amount</th>
                                <th><i className="bi bi-three-dots-vertical"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <SingleOrder key={index} order={order} />
                            ))}
                        </tbody>
                    </>
                }
            </table>
            <Button
                type="submit"
                customStyles={{
                    // width: "40%"
                }}
                onClick={showOrders}
            >
                Show all
            </Button>
        </div>
    );
};

export default OrderHistory;