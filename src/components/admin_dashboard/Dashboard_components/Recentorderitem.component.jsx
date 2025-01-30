import { useSelector } from "react-redux";

const RecentOrderItem = ({ order }) => {
    const orderdata = useSelector((state) => state.orders);
    const ordersShipmentList = orderdata.orders.ordersData.ordersShippings;
    const usersdata = useSelector((state) => state.users);
    const users = usersdata.users.usersData;

    return (
        <tr>
            <td>{order._id}</td>
            <td>{users.find(item => item._id.toString() == order.userId).name}</td>
            <td className="stacked-images">
                {order.products.map((item, index) => (
                    <img className='product-image-stack' key={index} src={item.images[0]} alt="Product" />
                ))}
            </td>
            <td>{order?.totalAmount?.$numberDecimal || 'Null'}</td>
            <td>{ordersShipmentList.find(item => item._id === order.orderShippingId).status}</td>
        </tr>
    );
};

export default RecentOrderItem;