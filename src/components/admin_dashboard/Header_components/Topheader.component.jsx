import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const TopHeader = ({ isSidebarOpen, toggleSidebar }) => {
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata?.data?.userData;
    // console.log("Header Auth User: ", logedUser);
    return (
        <div className="top-header">
            <div className="logo">
                <Link to="/" className="logo"><img src="/Handcrafted.png" alt="Logo" /></Link>
            </div>
            <div className="top-icons">
                <div className="profile-pic">
                    {/* Placeholder for profile image */}
                    {userdata.status
                        && <NavLink to="/admin/dashboard"><img src={logedUser?.profilePicture} alt={logedUser?.name} /></NavLink>
                    }
                </div>
                <button onClick={toggleSidebar} className="menu-icon">
                    {isSidebarOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
                </button>
            </div>
        </div>
    );
};

export default TopHeader;