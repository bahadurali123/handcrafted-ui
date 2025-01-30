import React from "react";
import { Button } from "../../index";
import { useNavigate } from "react-router-dom";
import { format, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";
import { useSelector } from "react-redux";

const OrderItem = ({ order }) => {
    const navigate = useNavigate();
    const usersdata = useSelector((state) => state.users);
    const users = usersdata.users.usersData;
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
        <tr>
            <td>{order._id}</td>
            <td>{users.find(item => item._id.toString() == order.userId).name}</td>
            <td>{formatRelativeDate(order.createdAt)}</td>
            <td>{order?.totalAmount?.$numberDecimal || 'Null'}</td>
            <td>{ordersShipmentList.find(item => item._id === order.orderShippingId).status}</td>
            <td>
                <Button
                    type='button'
                    onClick={() => navigate(`/admin/order/${order._id}`)}>Details
                </Button>
            </td>
        </tr>
    );
};

export default OrderItem;