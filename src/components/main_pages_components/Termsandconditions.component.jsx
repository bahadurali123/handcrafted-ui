import '../../styles/Ui/Termsandconditions.css';

const TermsAndConditions = () => {
    return (
        <div className="terms-container">
            <h1 className="terms-title">Terms and Conditions</h1>

            <div className="terms-content">
                <section>
                    <h2>1. Introduction</h2>
                    <p>Welcome to Handcrafted. By using our website, you agree to the following terms and conditions. Please read them carefully before making any purchases or using the platform.</p>
                </section>

                <section>
                    <h2>2. Definitions</h2>
                    <ul>
                        <li>“We,” “Us,” “Our” refers to Handcrafted.</li>
                        <li>“User,” “You” refers to anyone using or accessing the website.</li>
                        <li>“Products” refers to all items listed for sale on Handcrafted, including home decor, jewelry, gifts, textiles, and custom orders.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Account Creation</h2>
                    <p>To use certain features of the website, you must create an account with accurate, up-to-date information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
                </section>

                <section>
                    <h2>4. Orders and Payment</h2>
                    <ul>
                        <li>All prices listed are in USD (or local currency).</li>
                        <li>Payment methods include credit card, PayPal, and other online payment gateways.</li>
                        <li>Once an order is placed and payment is received, a confirmation email will be sent to the user.</li>
                        <li>We reserve the right to refuse or cancel orders at our discretion, such as in cases of suspected fraud or pricing errors.</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Shipping and Delivery</h2>
                    <ul>
                        <li>Shipping times vary based on location and product availability. We will provide an estimated delivery date upon checkout.</li>
                        <li>We are not responsible for delays caused by shipping carriers but will assist in tracking and resolving shipping issues.</li>
                    </ul>
                </section>

                <section>
                    <h2>6. Returns and Refunds</h2>
                    <ul>
                        <li>We offer a 30-day return policy on all items. To be eligible for a return, products must be unused and in their original packaging.</li>
                        <li>To initiate a return, please contact our customer service team at support@handcrafted.com.</li>
                        <li>Refunds will be processed within 7-10 business days after we receive the returned product.</li>
                        <li>Custom-made orders may not be eligible for returns, but we will work with you in case of defects or damage.</li>
                    </ul>
                </section>

                <section>
                    <h2>7. User-Generated Content</h2>
                    <ul>
                        <li>Users may post reviews, comments, and other content on our website. By posting content, you grant us a non-exclusive, royalty-free license to use and display that content.</li>
                        <li>We reserve the right to remove any content that we deem inappropriate or in violation of these terms.</li>
                    </ul>
                </section>

                <section>
                    <h2>8. Intellectual Property</h2>
                    <p>All content on Handcrafted, including text, images, and logos, is the property of Handcrafted and protected by intellectual property laws. You may not reproduce, distribute, or use any of our content without explicit written permission.</p>
                </section>

                <section>
                    <h2>9. Limitation of Liability</h2>
                    <p>We are not liable for any damages arising from the use of our website or from the purchase of products through the website. In no event shall our liability exceed the total amount paid by you for the product in question.</p>
                </section>

                <section>
                    <h2>10. Changes to Terms</h2>
                    <p>We reserve the right to update or modify these terms at any time. Users will be notified of any changes, and continued use of the website constitutes acceptance of the new terms.</p>
                </section>

                <section>
                    <h2>11. Governing Law</h2>
                    <p>These terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.</p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;