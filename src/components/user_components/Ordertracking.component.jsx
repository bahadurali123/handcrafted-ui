import React, { useEffect, useState } from "react";
import "../../styles/Components/user/Ordertracking.css";
import { useParams } from "react-router-dom";
import fedexService from "../../../services/fedex.service";
import { useSelector } from "react-redux";

const OrderTracking = () => {
    const Id = useParams();
    const [shipevents, setShipevents] = useState([]);
    const [orderStatus, setOrderStatues] = useState('');
    console.log("Order Tracking id", Id);
    const orderdata = useSelector((state) => state.orders);
    const orders = orderdata.orders.ordersData.orders;
    const order = orders.find(item => item.orderShippingId === Id.Id);

    useEffect(() => {
        const orderTrack = async () => {
            try {
                const response = await fedexService.trackShipment(Id.Id);
                // console.log("Order Tracking 1: ", response);

                const mostRecentEvent = response.data.simplifiedStatus;
                const events = response.data.enrichedScanEvents
                setOrderStatues(mostRecentEvent);
                setShipevents(events);
            } catch (error) {
                console.log("Order Tracking Error: ", error);
            }
        }
        orderTrack();
    }, []);

    return (
        <div className="order-tracking-wrapper">
            <div className="order-tracking-header">
                <h1>
                    Order Tracking: <span className="order-id">{order._id}</span>
                </h1>
                <p className="order-status">
                    Status: <span className={`status-${orderStatus.toLowerCase()}`}>{orderStatus}</span>
                </p>
                <p className="order-message">
                    {orderStatus === "Delivered"
                        ? "The order has been delivered successfully."
                        : "Your order is in progress."}
                </p>
            </div>
            <div className="order-tracking-timeline">
                {shipevents.map((step, index) => (
                    <div key={index} className="timeline-step">
                        <div className="circle"></div>
                        <div className="line"></div>
                        <div className="step-label">
                            <h3>{step.eventName}</h3>
                            <p>{step.eventDescription}</p>
                            <p>{step.scanLocation.city} {step.scanLocation.countryCode}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderTracking;