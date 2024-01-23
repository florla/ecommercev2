import React, { useState } from 'react';
import axios from 'axios'; 

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubscribe = async () => {
        if (validateEmail()) {
            setIsValidEmail(true);
            try {
                await axios.post('http://localhost:4000/subscribe', { userEmail: email });
                console.log('Subscription successful');
            } catch (error) {
                console.error('Error subscribing:', error.response.data.error);
            }
        } else {
            setIsValidEmail(false);
        }
    };

    return (
        <footer>
            <div className="footer-content">
                <div className="logo">
                    <img id="footer-logo" src="photos/logo.png" alt="Logo" />
                </div>
                <div className="subscribe">
                    <h3>Subscribe to our email newsletter</h3>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={!isValidEmail ? 'invalid' : ''}
                    />
                    <button onClick={handleSubscribe}>Subscribe</button>
                    {!isValidEmail && <p className="error-message">Please enter a valid email address</p>}
                </div>
                <div className="social-media">
                    <a href="https://instagram.com" target="_blank">
                        <img className="fa fa-instagram socials" src="photos/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <img className="fa fa-facebook-f socials" src="photos/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://x.com" target="_blank">
                        <img className="fa fa-twitter" src="photos/x.png" alt="X" />
                    </a>
                </div>
            </div>
            <div className="copyright">
                &copy; 2024 Starlight. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
