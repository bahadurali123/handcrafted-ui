import { NoData, SingleShippingAddress } from "../index";
import "../../styles/Components/user/Shippingaddresses.css"
import { useDispatch, useSelector } from 'react-redux';
import shippingService from '../../../services/shipping.service';
import { deleteShipping, loadAllShippings } from '../../store/slices/shipping.slice';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/auth.slice';


const ShippingAddressesPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const imageSrc = "/Handcrafted.png";
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data.userData;
    const shipAddressIds = logedUser?.shippingAddresses;
    const shippingsdata = useSelector((state) => state.shipping);
    const shippings = shippingsdata.shippings.ShippingsData;
    const shippingAddresses = shippings.filter(shipping => shipAddressIds.includes(shipping._id));
    // console.log("Shipping Addresses", shippings, shippingAddresses);

    // Handle status change
    const handleStatusChange = async (id) => {
        // console.log('Change address status:', id);
        try {
            const response = await shippingService.updateShippingStatus(id);
            // console.log("updata shipping status Response: ", response);
            if (response) {
                const ShippingsData = response.data;
                if (ShippingsData) {
                    dispatch(loadAllShippings({ ShippingsData }));
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/account/shipping/edit/${id}`)

    };

    const handleDelete = async (id) => {
        try {
            const response = await shippingService.deleteShipping(id);
            // console.log("delete shipping Response: ", response);
            if (response) {
                const shippingData = response.data.shipping;
                const userData = response.data.user;
                if (shippingData && userData) {
                    dispatch(deleteShipping({ shippingData }));
                    dispatch(login({ userData }));
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="shipping-addresses-page">
            <h2>Shipping Addresses</h2>
            <table className="shipping-addresses-table">
                {shippingAddresses.length === 0 ? (
                    <NoData
                        type="shipping address"
                        message="No Shipping Addresses Found"
                        imageSrc={imageSrc}
                    />
                ) :
                    <>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Street</th>
                                <th>Building</th>
                                <th>Province</th>
                                <th>City</th>
                                <th>Postal</th>
                                <th>Country</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shippingAddresses.map((address) => (
                                <SingleShippingAddress
                                    key={address._id}
                                    address={address}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                    onStatusChange={handleStatusChange}
                                />
                            ))}
                        </tbody>
                    </>
                }
            </table>
        </div>
    );
};

export default ShippingAddressesPage;