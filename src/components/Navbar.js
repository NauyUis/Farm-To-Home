import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);

    return (
        <header>
            <div className="top-bar">
                <div className="email-phone">
                    <a href="mailto:info@domain.com" className="contact-info">
                        <FontAwesomeIcon icon={faEnvelope} size="1x" /> info@domain.com
                    </a>
                    <span className="contact-info">
                        <FontAwesomeIcon icon={faPhone} size="1x" /> +1 234 567 8910
                    </span>
                </div>
                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>

            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li
                        onMouseEnter={() => setShowProductsDropdown(true)}
                        onMouseLeave={() => setShowProductsDropdown(false)}
                    >
                        <a href="/classes">Products</a>
                        {showProductsDropdown && (
                            <ul className="dropdown">
                                <li><a href="/products/product1">Product 1</a></li>
                                <li><a href="/products/product2">Product 2</a></li>
                                <li><a href="/products/product3">Product 3</a></li>
                                <li><a href="/products/product4">Product 4</a></li>
                                <li><a href="/products/product5">Product 5</a></li>
                                <li><a href="/products/product6">Product 6</a></li>
                                <li><a href="/products/product7">Product 7</a></li>
                                <li><a href="/products/product8">Product 8</a></li>
                                <li><a href="/products/product9">Product 9</a></li>
                                <li><a href="/products/product10">Product 10</a></li>
                                <li><a href="/products/product11">Product 11</a></li>
                                <li><a href="/products/product12">Product 12</a></li>
                                <li><a href="/products/product13">Product 13</a></li>
                                <li><a href="/products/product14">Product 14</a></li>
                                <li><a href="/products/product15">Product 15</a></li>
                                <li><a href="/products/product16">Product 16</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/pages">My Wishlist</a></li>
                    <li><a href="/about">Login/Register</a></li>
                    <li
                        onMouseEnter={() => setShowCustomerDropdown(true)}
                        onMouseLeave={() => setShowCustomerDropdown(false)}
                    >
                        <a href="/events">Customer Service</a>
                        {showCustomerDropdown && (
                            <ul className="dropdown">
                                <li><a href="/customer/faq">FAQ</a></li>
                                <li><a href="/customer/support">Privacy Policy</a></li>
                                <li><a href="/customer/shipping">Return & Refund Policy</a></li>
                                <li><a href="/customer/shipping">Terms & Condition</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/gallery">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>

                <div className="logo">
                    <a href='/home'>
                    <img src="https://farmtohome.com.my/image/farmtohome/image/data/Farm-to-Home-Delivery-logo.jpg" alt="Logo" width="auto" height="52px" />
                    </a>
                </div>
                

                <div className="nav-icons">
                    <a href="/search" className="icon-link">
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                    </a>
                    <a href="/cart" className="icon-link">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                    </a>
                    <a href="/profile" className="icon-link">
                        <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
