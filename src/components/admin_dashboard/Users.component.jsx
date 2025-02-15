import React, { useState } from 'react';
import { PageHeader, Pagination, UserRow, UserFilterPopup, NoData } from "../index";
import '../../styles/Components/admin/Users.css';
import { useSelector } from 'react-redux';

const Users = () => {
    const imageSrc = "/Handcrafted.png";
    const usersdata = useSelector((state) => state.users);
    const users = usersdata.users.usersData;
    const filterState = useSelector((state) => state.filters);
    const filterUsers = filterState.filteredData;

    // console.log("Filtered Categories: ", filterState);

    // Check filter status true or false
    const dataIs = filterState.entity === "Users" && filterState.status === true ? filterUsers : users;

    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // Pagination logic
    const indexOfLastuser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastuser - usersPerPage;
    const currentUsers = dataIs.slice(indexOfFirstUser, indexOfLastuser);
    const totalPages = Math.ceil(dataIs.length / usersPerPage);



    const handleFilterClick = () => setShowFilter(true);
    const handleFilterClose = () => setShowFilter(false);
    return (
        <div className="users-container">
            <PageHeader
                title="Users"
                onButtonClick={() => console.log('Add new product')}
                onFilterClick={handleFilterClick}
            />

            <table className="users-table">
                {currentUsers.length === 0 ? (
                    <NoData
                        type="users"
                        message="No Users Exist"
                        imageSrc={imageSrc}
                    />
                ) :
                    <>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Registration</th>
                                <th>Orders</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((user, index) => (
                                <UserRow key={index} user={user} />
                            ))}
                        </tbody>
                    </>
                }
            </table>

            {showFilter && <UserFilterPopup onClose={handleFilterClose} />}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Users;