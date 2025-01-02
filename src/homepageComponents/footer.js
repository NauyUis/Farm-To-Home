import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="https://farmtohome.com.my/image/farmtohome/image/data/LOGO.png" alt="Farm To Home Delivery" />
                </div>
                <div className="footer-links">
                    <a href="/my-account">MY ACCOUNT</a>
                    <a href="/order-history">ORDER HISTORY</a>
                    <a href="/receipt-upload">RECEIPT UPLOAD</a>
                    <a href="/return-policy">RETURN & REFUND POLICY</a>
                    <a href="/privacy-policy">PRIVACY POLICY</a>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Farm To Home Delivery. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
