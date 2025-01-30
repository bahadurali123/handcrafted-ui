import { useSelector } from 'react-redux';
import { NoData } from "../../index";

const LowStockAlerts = () => {
    const imageSrc = "/Handcrafted.png";
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;

    return (
        <div className="low-stock-alerts-container">
            <h3>Low Stock Alerts</h3>
            <div className="low-stock-items">
                {products.length === 0 ? (
                    <NoData
                        type="products"
                        message="No Stock Alerts"
                        imageSrc={imageSrc}
                    />
                ) :
                    (products.map((item, index) => {
                        if (item.stockQuantity < 5) {
                            return (<span key={index}>{item.name} - {item.stockQuantity} items left {index + 1 < products.length ? "," : ""}</span>)
                        }
                    }))
                }
            </div>
        </div>
    );
};

export default LowStockAlerts;