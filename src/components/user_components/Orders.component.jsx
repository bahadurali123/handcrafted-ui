import React, { useState } from 'react';
import "../../styles/Components/user/Orders.css"
import { SingleOrder, Pagination, NoData } from "../index";
import { useSelector } from 'react-redux';

const Orders = () => {
    const imageSrc = "/Handcrafted.png";
    const orderdata = useSelector((state) => state.orders);
    const orders = orderdata.orders.ordersData.orders;
    console.log("User Orders: ", orders);

    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5;

    // Pagination logic
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    return (
        <div className="orders">
            <h2>Orders</h2>
            <table>
                {currentOrders.length === 0 ? (
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.map((order, index) => (
                                <SingleOrder key={index} order={order} />
                            ))}
                        </tbody>
                    </>
                }
            </table>
            {currentOrders.length === 0 ||
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />}
        </div>
    );
};

export default Orders;
