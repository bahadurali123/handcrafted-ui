import { ProductComponent } from "../../index";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
    const navigate = useNavigate();
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    const shuffleProducts = shuffleArray(products.filter(item => item.featured === true));
    const filteredProducts = shuffleProducts.slice(0, 10);

    return (
        <div className="featured-products">
            <h2>Featured Products</h2>
            <div className="featured-products-list">
                {filteredProducts.map(product => (
                    <ProductComponent
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        imageUrl={product.images[0]}
                        QuickView={() => navigate(`/shop/product/${product._id}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;