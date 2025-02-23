import { Helmet } from "react-helmet";
import { ShoppingCart as ShoppingCartComponent } from "../../components/index";

function ShoppingCart() {
    return (
        <>
            <Helmet>
                <title>Shopping Cart - Handcrafted</title>
                <meta name="description" content="View and manage your shopping cart before completing your handcrafted purchase." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/cart" />
            </Helmet>
            <ShoppingCartComponent />
        </>
    )
}

export default ShoppingCart;