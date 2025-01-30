import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/Components/user/Orderdetails.css";
import { OrderProduct, Button } from "../index";
import { useSelector } from "react-redux";
import { format, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";

const OrderDetails = () => {
    // const navigate = useNavigate();
    const orderId = useParams();
    console.log("Order Id: ", orderId);
    const orderdata = useSelector((state) => state.orders);
    const orders = orderdata.orders.ordersData.orders;
    const ordersShipping = orderdata.orders.ordersData.ordersShippings;
    const order = orders.find(item => item._id === orderId.orderId);
    const shipping = ordersShipping.find(item => item._id === order.orderShippingId);

    const countTotalProductQuantity = (data) => {
        return data.reduce((acc, curr) => acc + curr.quantity, 0);
    };

    const formatRelativeDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const now = new Date();
        const diffMinutes = Math.floor((now - date) / (1000 * 60));
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        const diffWeeks = Math.floor(diffDays / 7);
        const diffMonths = differenceInCalendarMonths(now, date);
        const diffYears = differenceInCalendarYears(now, date);

        // Format options
        if (diffMinutes < 60) return `${diffMinutes}mn ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        if (diffWeeks < 4) return `${diffWeeks}w ago`;
        if (diffMonths < 12) return `${diffMonths}mon ago`;
        if (diffYears < 2) return `${diffYears}year ago`;

        return format(date, "dd/MM/yyyy");
    };

    // const DownloadInvoice = async () => {
    //     console.log("Download Invoice Logic...", shipping.document);
    // }

    return (
        <div className="order-details">
            <h2 className='order-heading'>Order Details</h2>
            <div className="order-info">
                <div>
                    <p><strong>Order ID:</strong> {order._id}</p>
                    <p><strong>Total Quantity:</strong> {countTotalProductQuantity(order.products)}</p>
                    <p><strong>Order Date:</strong> {formatRelativeDate(order.createdAt)}</p>
                    <p><strong>Total Price:</strong> {order?.totalAmount?.$numberDecimal || 'Null'}</p>
                </div>
                <Link to={shipping.document} target="_blank" rel="noopener noreferrer">
                    <Button
                    // onClick={DownloadInvoice}
                    >
                        Download Invoice
                    </Button>
                </Link>
            </div>

            <h3 className='order-product-heading'>Order Products</h3>
            <div className="products-list">
                {order.products.map((product, index) => (
                    <OrderProduct key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default OrderDetails;
