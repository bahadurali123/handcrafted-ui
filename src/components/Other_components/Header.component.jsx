import { useSelector } from 'react-redux';
import '../../styles/Others/Header.css'; // Import the styles
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata?.data?.userData;

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/" className="logo"><img src="/Handcrafted.png" alt="logo" /></Link>
            </div>
            <div className="header-right">
                <nav className="nav-links">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/shop/products">Products</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    {userdata.status
                        ? <NavLink to="/account/dashboard" className="nav-profile-pic"><img src={logedUser?.profilePicture} alt={logedUser?.name} /></NavLink>
                        : <NavLink to="/auth/login">Login</NavLink>
                    }
                    <NavLink to="/cart"><i className="bi bi-cart4"></i></NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
