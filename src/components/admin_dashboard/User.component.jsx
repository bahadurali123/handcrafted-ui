import { useNavigate, useParams } from "react-router-dom";
import "../../styles/Components/admin/Userdetails.css"
import { SingleUserOrder, Button, NoData } from "../index";
import { useSelector } from "react-redux";

const UserDetails = () => {
    const navigate = useNavigate();
    const imageSrc = "/Handcrafted.png";
    const userId = useParams();
    const usersdata = useSelector((state) => state.users);
    const users = usersdata.users.usersData;
    const shippingdata = useSelector((state) => state.shipping);
    const shippings = shippingdata.shippings.ShippingsData;
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;
    const orderdata = useSelector((state) => state.orders);
    const ordersList = orderdata.orders.ordersData.orders;
    // console.log("Orders List in history: ", ordersList);

    const user = users.filter(item => item._id === userId.userId);
    // console.log("User for edit is: ", user);
    const filterShippings = shippings.filter(element => user[0].shippingAddresses.includes(element._id));
    // console.log("Shippings filter: ", filterShippings);
    const filterProducts = products.filter(element => user[0].wishlist.includes(element._id));
    // console.log("Products filter: ", filterProducts);
    const orders = ordersList.filter(element => user[0]._id.includes(element.userId));
    // console.log("Orderss filter: ", orders);

    return (
        <div className="user-details-container">
            <h2 className="user-header">User: {user[0].name}</h2>

            <section className="account-info">
                <h3>Account Information</h3>
                <p><strong>Email:</strong> {user[0].email}</p>
                <p><strong>Status:</strong> {user[0].status}</p>
            </section>

            <section className="shipping-addresses">
                <h3>Shipping Addresses</h3>
                {filterShippings.length === 0 ? (
                    <NoData
                        type="shipping address"
                        message="Addresses No Exist"
                        imageSrc={imageSrc}
                    />
                ) : (
                    filterShippings.map(address => (
                        <p key={address._id} >{
                            `${address.building}, 
                        ${address.street}, 
                        ${address.city}, 
                        ${address.state}, 
                        ${address.countryCode}, 
                        ${address.postalCode}`
                        }</p>
                    )))
                }
            </section>

            <section className="order-history">
                <h3>Order History</h3>
                <table>
                    {orders.length === 0 ? (
                        <NoData
                            type="orders"
                            message="Orders No Exist"
                            imageSrc={imageSrc}
                        />
                    ) :
                        <>
                            <thead>
                                <tr>
                                    <th>Order Number</th>
                                    <th>Date</th>
                                    <th>Total Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <SingleUserOrder key={index} order={order} />
                                ))}
                            </tbody>
                        </>
                    }
                </table>
            </section>

            <section className="wishlist">
                <h3>Wishlist</h3>
                <ul>
                    {filterProducts.length === 0 ? (
                        <NoData
                            type="wishlist"
                            message="Wishlist No Exist"
                            imageSrc={imageSrc}
                        />
                    ) :
                        (filterProducts.map(item => (
                            <li key={item._id}>{item.name}</li>
                        )))
                    }
                </ul>
            </section>

            <section className='edit-account-button-section'>
                <Button
                    type='button'
                    onClick={() => navigate(`/admin/user/edit/${user[0]._id}`)}
                >
                    Edit Account Information
                </Button>
            </section>
        </div>
    );
};

export default UserDetails;