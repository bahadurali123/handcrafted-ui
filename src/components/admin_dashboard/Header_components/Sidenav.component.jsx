import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = ({ isSidebarOpen }) => {
    return (
        <div className={`side-nav ${isSidebarOpen ? 'open' : 'closed'}`}>
            <ul className="side-nav-links">
                <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/admin/products">Product</NavLink></li>
                <li><NavLink to="/admin/orders">Order</NavLink></li>
                <li><NavLink to="/admin/users">User</NavLink></li>
                <li><NavLink to="/admin/blogs">Blog</NavLink></li>
                <li><NavLink to="/admin/categories">Category</NavLink></li>
                <li><NavLink to="/auth/logout">Logout</NavLink></li>
            </ul>
        </div>
    );
};

export default SideNav;