import React, { useState } from 'react';
// import TopHeader from './TopHeader';
// import SideNav from './SideNav';
import TopHeader from './Header_components/Topheader.component';
import SideNav from './Header_components/Sidenav.component';
import "../../styles/Components/admin/header.css"

const AdminHeader = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="header-container">
            <TopHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <SideNav isSidebarOpen={isSidebarOpen} />
        </div>
    );
};

export default AdminHeader;