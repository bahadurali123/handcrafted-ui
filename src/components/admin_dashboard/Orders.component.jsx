import React, { useState } from "react";
import "../../styles/Components/admin/Orders.css";
import { NoData, OrderItem, OrdersFilterPopup, PageHeader, Pagination } from "../index";
import { useSelector } from "react-redux";

const AdminOrders = () => {
    const imageSrc = "/Handcrafted.png";
    const orderdata = useSelector((state) => state.orders);
    const orders = orderdata.orders.ordersData.orders;
    const filterState = useSelector((state) => state.filters);
    const filterProducts = filterState.filteredData;

    // console.log("Filtered Categories: ", filterState);

    // Check filter status true or false
    const dataIs = filterState.entity === "orders" && filterState.status === true ? filterProducts : orders;


    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    // Pagination logic
    const indexOfLastpost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastpost - postsPerPage;
    const currentOrders = dataIs.slice(indexOfFirstPost, indexOfLastpost);
    const totalPages = Math.ceil(dataIs.length / postsPerPage);

    const handleFilterClick = () => setShowFilter(true);
    const handleFilterClose = () => setShowFilter(false);
    return (
        <div className="orders-page">
            <PageHeader
                title="Orders"
                onFilterClick={handleFilterClick}
            />

            <div className="orders-table-container">
                <table className="orders-table">
                    {currentOrders.length === 0 ? (
                        <NoData
                            type="orders"
                            message="No Orders Exist"
                            imageSrc={imageSrc}
                        />
                    ) :
                        <>
                            <thead>
                                <tr>
                                    <th>Order Number</th>
                                    <th>Customer Name</th>
                                    <th>Date</th>
                                    <th>Total Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrders.map((order, index) => (
                                    <OrderItem
                                        key={index}
                                        order={order}
                                    />
                                ))}
                            </tbody>
                        </>
                    }
                </table>
            </div>

            {showFilter && <OrdersFilterPopup onClose={handleFilterClose} />}

            <div className="orders-pagination">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default AdminOrders;