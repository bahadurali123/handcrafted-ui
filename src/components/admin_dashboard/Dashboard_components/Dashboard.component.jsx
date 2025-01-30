import { Stats, RecentOrders, LowStockAlerts } from "../../index";
import "../../../styles/Components/admin/Dashboard.css"

const AdminDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="page-title">
            <h2>Dashboard</h2>
            </div>
            <Stats />
            <RecentOrders />
            <LowStockAlerts />
        </div>
    );
};

export default AdminDashboard;