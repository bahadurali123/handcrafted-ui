import { useNavigate } from 'react-router-dom';
import '../../styles/Components/user/Shippingaddress.css';
import { Button, NoData } from '../index';
import { useSelector } from 'react-redux';


const ShippingAddress = () => {
    const navigate = useNavigate();
    const imageSrc = "/Handcrafted.png";
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data.userData;
    const shipAddressIds = logedUser?.shippingAddresses.slice(0, 5);
    const shippingsdata = useSelector((state) => state.shipping);
    const shippings = shippingsdata.shippings.ShippingsData;
    const shippingAddresses = shippings.filter(shipping => shipAddressIds.includes(shipping._id));
    // console.log("Shippings Addresses", shippings, shippingAddresses);

    const showAllAddress = () => {
        navigate('/account/shipping');
    }
    const addNewAddress = () => {
        navigate('/account/shipping/add');
    }
    return (
        <div className="shipping-address">
            <h3>Shipping Address</h3>
            {shippingAddresses.length === 0 ? (
                <NoData
                    type="shipping address"
                    message="No Shipping Addresses Found"
                    imageSrc={imageSrc}
                />
            ) :
                shippingAddresses.map(item => (
                    <p key={item._id}>
                        {item.street} {item.building} {item.city} {item.state} {item.postalCode} {item.countryCode}
                    </p>
                ))}
            <div className="shipping-address-buttons">
                <Button
                    type="submit"
                    customStyles={{
                        // width: "40%"
                    }}
                    onClick={showAllAddress}
                >
                    Show all
                </Button>
                <Button
                    type="submit"
                    customStyles={{
                        // width: "40%"
                    }}
                    onClick={addNewAddress}
                >
                    New
                </Button>

            </div>
        </div>
    );
};

export default ShippingAddress;
