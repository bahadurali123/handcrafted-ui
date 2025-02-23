import { Helmet } from "react-helmet";
import { WriteReview as WriteReviewComponent } from "../../components/index";

function WriteReview() {
    return (
        <>
            <Helmet>
                <title>Write a Review - Handcrafted</title>
                <meta name="description" content="Share your thoughts and experiences about our handcrafted products." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/review" />
            </Helmet>
            <WriteReviewComponent />
        </>
    )
}

export default WriteReview;