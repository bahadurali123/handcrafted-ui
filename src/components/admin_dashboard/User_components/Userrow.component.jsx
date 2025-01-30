import React from 'react';
import { Button } from "../../index";
import { format, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserRow = ({ user }) => {
    const navigate = useNavigate();
    const orderdata = useSelector((state) => state.orders);
    const ordersList = orderdata.orders.ordersData.orders;
    const orders = ordersList.filter(element => user._id.includes(element.userId));


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

    console.log("Users Test: ", user, orders);

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{formatRelativeDate(user.createdAt)}</td>
            <td>{orders.length}</td>
            <td>{user.status}</td>
            <td>
                <Button
                    type='button'
                    onClick={() => navigate(`/admin/user/${user._id}`)}
                >
                    Details
                </Button>
            </td>
        </tr>
    );
};

export default UserRow;