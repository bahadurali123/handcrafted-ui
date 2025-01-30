import { useSelector } from "react-redux";
import { format, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";

const SingleUserOrder = ({ order }) => {
    const orderdata = useSelector((state) => state.orders);
    const ordersShipmentList = orderdata.orders.ordersData.ordersShippings;

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

    return (
        <tr className="single-order-row">
            <td>{order._id}</td>
            <td>{formatRelativeDate(order.createdAt)}</td>
            <td>{order.totalAmount.$numberDecimal}</td>
            <td>{ordersShipmentList.find(item => item._id === order.orderShippingId).status}</td>
        </tr>
    );
};

export default SingleUserOrder;