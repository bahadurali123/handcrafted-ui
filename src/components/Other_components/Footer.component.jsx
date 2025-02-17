import { Link } from 'react-router-dom';
import '../../styles/Others/Footer.css'; // Import the styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Quick Links Section */}
                <div className="footer-left">
                    <h3>Quick&nbsp;Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/shop/products">Products</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="footer-middle">
                    <h3>Newsletter</h3>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                {/* Social Icons Section */}
                <div className="footer-right">
                    <h3>Follow&nbsp;Us</h3>
                    <div className="social-icons">
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></Link>
                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></Link>
                        <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></Link>
                        <Link to="https://www.linkedin.com/in/bahadurk" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></Link>
                        <Link to="https://github.com/bahadurali123" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></Link>
                    </div>
                </div>
            </div>

            {/* Rights Reserved Message */}
            <div className="rights-reserved">
                <p>All rights reserved by Bahadur Khan</p>
            </div>
        </footer>
    );
};

export default Footer;
