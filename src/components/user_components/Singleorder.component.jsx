import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Components/user/Singleorder.css"
import { format, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";
import Button from '../Other_components/Button.component';
import { useSelector } from 'react-redux';

const SingleOrder = ({ order }) => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const orderdata = useSelector((state) => state.orders);
    const ordersShipmentList = orderdata.orders.ordersData.ordersShippings;
    // console.log("Orders List in history: ", ordersList);

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

    const handlePopupToggle = () => {
        setShowPopup(!showPopup); // Toggle popup
    };

    const handleRedirect = (path) => {
        navigate(path); // Redirect to the provided path
    };

    return (
        <tr>
            <td>{order._id}</td>
            <td>{formatRelativeDate(order.createdAt)}</td>
            <td><img className='order-product-image' src={order.products[0].images[0]} alt="Product" /></td>
            {/* <td>
                {order.products.map((item, index) => (
                    <img className='order-product-image' key={index} src={item.images[0]} alt="Product" />
                ))}
            </td> */}
            <td>{ordersShipmentList.find(item => item._id === order.orderShippingId).status}</td>
            <td>{order?.totalAmount?.$numberDecimal || 'Null'}</td>
            <td>
                <div className="action-container">
                    {/* Three-dot icon for more actions */}
                    <i className="bi bi-three-dots-vertical" onClick={handlePopupToggle}></i>

                    {/* Popup menu */}
                    {showPopup && (
                        <div className="actions-popup">
                            <Button
                                type='button'
                                onClick={() => handleRedirect(`/account/order/${order._id}`)}>Details
                            </Button>
                            <Button
                                type='button'
                                onClick={() => handleRedirect(`/account/order/tracking/${order.orderShippingId}`)}>Tracking
                            </Button>
                            <Button
                                type='button'
                                onClick={() => handleRedirect(`/account/review/${order._id}`)}>Review
                            </Button>
                        </div>
                    )}
                </div>
            </td>
        </tr >
    );
};

export default SingleOrder;
