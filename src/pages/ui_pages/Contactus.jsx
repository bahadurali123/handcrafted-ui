import { Helmet } from "react-helmet";
import { ContactUs as ContactUsComponent } from "../../components/index";

function ContactUsPage() {
    return (
        <>
            <Helmet>
                <title>Contact Us - Handcrafted</title>
                <meta name="description" content="Get in touch with Handcrafted for any inquiries or support regarding our products." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/contact" />
            </Helmet>
            <ContactUsComponent />
        </>
    )
}

export default ContactUsPage;