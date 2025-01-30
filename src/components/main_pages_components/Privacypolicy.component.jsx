import '../../styles/Ui/Privacypolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <h1 className="privacy-policy-title">Privacy Policy</h1>

            <div className="privacy-policy-content">
                <section>
                    <h2>1. Introduction</h2>
                    <p>Handcrafted is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
                </section>

                <section>
                    <h2>2. Information We Collect</h2>
                    <p><strong>Personal Information:</strong> When you create an account, make a purchase, or contact us, we may collect personal information such as your name, email address, shipping address, and payment details.</p>
                    <p><strong>Non-Personal Information:</strong> We may collect non-personal data such as your IP address, browser type, and site usage through cookies and analytics tools.</p>
                </section>

                <section>
                    <h2>3. How We Use Your Information</h2>
                    <ul>
                        <li>To Process Orders: We use your personal information to process payments, ship products, and send order confirmations.</li>
                        <li>To Improve Our Services: We may use data to analyze site usage and improve the overall user experience.</li>
                        <li>Marketing: With your consent, we may send promotional emails about new products, special offers, or upcoming events.</li>
                        <li>Legal Obligations: We may disclose your information if required by law or to protect our rights.</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Data Sharing</h2>
                    <ul>
                        <li>Third-Party Service Providers: We work with third parties (e.g., payment processors, shipping companies) to fulfill orders and provide our services. These providers are given access to necessary personal information and are bound by confidentiality agreements.</li>
                        <li>No Sale of Personal Data: We do not sell, rent, or trade your personal data to third parties.</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Data Security</h2>
                    <ul>
                        <li>We use industry-standard security measures to protect your data. This includes SSL encryption for sensitive transactions (e.g., credit card details).</li>
                        <li>While we strive to protect your information, no method of transmission over the internet is 100% secure.</li>
                    </ul>
                </section>

                <section>
                    <h2>6. Cookies</h2>
                    <ul>
                        <li><strong>What Are Cookies?</strong> Cookies are small text files stored on your browser that help us understand your preferences and improve your experience on our site.</li>
                        <li><strong>Types of Cookies:</strong>
                            <ul>
                                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser.</li>
                                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period to remember your preferences and login information.</li>
                            </ul>
                        </li>
                        <li><strong>Managing Cookies:</strong> You can control or delete cookies through your browser settings. However, disabling cookies may affect site functionality.</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Your Rights</h2>
                    <ul>
                        <li><strong>Access and Correction:</strong> You have the right to access and update your personal information by logging into your account.</li>
                        <li><strong>Deletion:</strong> You can request the deletion of your account and associated data at any time.</li>
                        <li><strong>Data Portability:</strong> You may request a copy of your data in a portable format.</li>
                        <li><strong>Opt-Out:</strong> You can unsubscribe from marketing emails at any time by clicking the “unsubscribe” link in the email.</li>
                    </ul>
                </section>

                <section>
                    <h2>8. Children’s Privacy</h2>
                    <p>Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
                </section>

                <section>
                    <h2>9. Changes to Privacy Policy</h2>
                    <p>We may update this Privacy Policy periodically. Any changes will be posted on this page, and your continued use of the site constitutes acceptance of the updated policy.</p>
                </section>

                <section>
                    <h2>10. Contact Us</h2>
                    <p>If you have any questions or concerns about our Terms and Conditions or Privacy Policy, please contact us at:</p>
                    <p>Email: support@handcrafted.com<br />Address: [Your Business Address]</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;