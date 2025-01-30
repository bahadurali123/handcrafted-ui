const ProductComponent = ({ name, price, imageUrl, QuickView }) => {
    return (
        <div className="product-card">
            <div className="image-container">
                <img src={imageUrl} alt={name} className="product-img" />
            </div>
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p className="product-price">${price}</p>
                <button onClick={QuickView} className="quick-view-button">Quick View</button>
            </div>
        </div>
    );
};

export default ProductComponent;
