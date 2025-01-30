import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import paymentService from "../../../services/payment.service";
import config from "../../../config/configuration";
import "../../styles/Ui/PayPalButton.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/slices/cart.slice";

const PaypalButtons = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
    const cartdata = useSelector((state) => state.cart);
    const createOrder = async () => {
        console.log("Create order!");
        try {
            const { cart, totalPrice } = cartdata;
            // const cart = [
            //     {
            //         // id: "YOUR_PRODUCT_ID",
            //         // quantity: "YOUR_PRODUCT_QUANTITY",
            //         cart,
            //         totalPrice
            //     },
            // ];

            // const response = await paymentService.createPaypalOrder(cart);
            const response = await paymentService.createPaypalOrder({ cart, totalPrice });
            console.log("Responser in Create order: ", response);
            return response.data.id;
        } catch (error) {
            console.log("Featch Posts Error: ", error);
        }
    }
    const onApprove = async (data) => {
        console.log("Capture order!");
        try {
            const response = await paymentService.capturePaypalPayment({ orderId: data.orderID, source: data.paymentSource });
            console.log("Responser in Capture order: ", response.data);
            console.log("Responser in Capture order status: ", response);
            const orderStatus = response.status;
            const statusCodes = [200, 201, 202, 204];
            if (statusCodes.includes(orderStatus)) {
                console.log("PayPal orde Created!");
                dispatch(clearCart());
                navigate('/order/success')
            } else {
                console.log("PayPal orde Creation Error!");
                navigate('/order/cancel')
            }

            // console.log("Responser in Capture order status: ", response?.status);
        } catch (error) {
            console.log("PayPal orde Creation Error: ", error);
        }
    };

    return (
        <div className="payment-container">
            <h1>PayPal</h1>
            <PayPalScriptProvider options={{ clientId: config.paypalClientId }}>
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default PaypalButtons;