
const AdminOrderProduct = ({ product }) => {
    return (
        <tr>
            <td>
                <img src={product.images[0]} alt={product.name} className="product-image" />
            </td>
            <td>{product.name}</td>
            <td>{product.quantity}&nbsp;x&nbsp;{product.shippingFee}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.quantity * product.price}</td>
        </tr>
    );
};

export default AdminOrderProduct;