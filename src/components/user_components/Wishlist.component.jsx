import { useNavigate } from 'react-router-dom';
import '../../styles/Components/user/Wishlist.css';
import { Button, NoData } from '../index';
import { useSelector } from 'react-redux';

const Wishlist = () => {
    const navigate = useNavigate();
    const imageSrc = "/Handcrafted.png";
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data.userData;
    const productIds = logedUser?.wishlist.slice(0, 5);
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;
    const wishlistProducts = products?.filter(product => productIds.includes(product._id));

    const showWishsList = () => {
        navigate('/account/wishlist');
    }
    return (
        <div className="wishlist">
            <h3>Wishlist</h3>
            {wishlistProducts.length === 0 ? (
                <NoData
                    type="wishlist"
                    message="No Wishlist Found"
                    imageSrc={imageSrc}
                />
            ) :
                wishlistProducts.map(item => (
                    <p key={item._id}>{item.name}</p>
                ))}
            <Button
                type="submit"
                customStyles={{
                    // width: "40%"
                }}
                onClick={showWishsList}
            >
                Show all
            </Button>
        </div>
    );
};

export default Wishlist;
