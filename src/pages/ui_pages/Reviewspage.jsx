import { Helmet } from "react-helmet";
import { ReviewsPage as ReviewsPageComponent } from "../../components/index";

function ReviewsPage() {
    return (
        <>
            <Helmet>
                <title>Customer Reviews - Handcrafted</title>
                <meta name="description" content="Read reviews from our satisfied customers and discover why they love our handmade products." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/reviews" />
            </Helmet>
            <ReviewsPageComponent />
        </>
    )
}

export default ReviewsPage;