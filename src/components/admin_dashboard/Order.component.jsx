import React, { useState } from "react";
import "../../styles/Components/admin/Order.css";
import { AdminOrderProduct, Button } from "../index";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminOrder = () => {
    const orderId = useParams().orderId;
    // console.log("Order ID: ", orderId);
    const orderdata = useSelector((state) => state.orders);
    const orders = orderdata.orders.ordersData.orders;
    const ordersShipmentList = orderdata.orders.ordersData.ordersShippings;
    const order = orders.find(item => item._id === orderId);
    const shipment = ordersShipmentList.find(item => item._id === order.orderShippingId);
    // console.log("Order: ", order);
    const [orderStatus, setOrderStatus] = useState(shipment.status);

    const handleStatusUpdate = () => {
        console.log(`Order status updated to: ${orderStatus}`);
        // Add API call to update order status in the backend
    };

    return (
        <div className="single-order-page">
            <h1>Order: {order._id}</h1>

            {/* Products Table */}
            <div className="products-section">
                <h2>Products</h2>
                <table className="products-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Shipping</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.products.map((product, index) => (
                            <AdminOrderProduct
                                key={index}
                                product={product}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Order Details */}
            <div className="order-details">
                <p>
                    <strong>Total:</strong> {order?.totalAmount?.$numberDecimal || 'Null'}
                </p>
                <p>
                    <strong>Shipping Address:</strong> {shipment.building} {shipment.street} {shipment.city} {shipment.state} {shipment.postalCode} {shipment.countryCode}
                </p>
                <p>
                    <strong>Payment Method:</strong> {order.paymentGateway}
                </p>
                <p>
                    <strong>Payment Status:</strong> {order.paymentStatus}
                </p>
                <p>
                    <strong>Tracking Number:</strong> {shipment.trackingNumber}
                </p>
                {shipment.status === 'Pending' ?
                    <p className="order-status">
                        <strong>Order Status:</strong>
                        <select
                            id="status"
                            value={orderStatus}
                            onChange={(e) => setOrderStatus(e.target.value)}
                            className="status-dropdown"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Ready to Ship">Ready to Ship</option>
                        </select>
                    </p>
                    :
                    <p>
                        <strong>Order Status:</strong> {shipment.status}
                    </p>
                }
            </div>

            {/* Update Order Status */}
            <div className="update-status-section">
                {shipment.status === 'Pending' ?
                    <Button
                        type='button'
                        onClick={handleStatusUpdate}
                    >
                        Update Status
                    </Button>
                    : ''}
            </div>
        </div>
    );
};

export default AdminOrder;