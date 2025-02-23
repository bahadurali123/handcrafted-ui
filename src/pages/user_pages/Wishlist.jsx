import { Helmet } from "react-helmet";
import { WishlistPage as WishlistComponent } from "../../components/index";

function Wishlist() {
    return (
        <>
            <Helmet>
                <title>Wishlist - Handcrafted</title>
                <meta name="description" content="Save your favorite handcrafted products to your wishlist for future purchases." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/wishlist" />
            </Helmet>
            <WishlistComponent />
        </>
    )
}

export default Wishlist;