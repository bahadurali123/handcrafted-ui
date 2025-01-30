import "../../styles/Components/user/Orderproduct.css"

const OrderProduct = ({ product }) => {
    return (
        <div className="order-product">
            <img src={product.images[0]} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.name}</h3>
                <div>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    {/* <p>Color: <span className="color-dot" style={{ backgroundColor: product.colors[0] }}></span></p> */}
                    <p>Color: {product.colors[0]}</p>
                </div>
                <p>{product.description}</p>
            </div>
        </div >
    );
};

export default OrderProduct;