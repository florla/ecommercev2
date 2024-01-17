// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="logo">
                    <img id="footer-logo" src="photos/logo.png" alt="Logo" />
                </div>
                <div className="subscribe">
                    <h3>Subscribe to our email newsletter</h3>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
                <div className="social-media">
                    <i>
                        <a className="fa fa-instagram socials" href="https://instagram.com" target="_blank"></a>
                    </i>
                    <i>
                        <a className="fa fa-facebook-f socials" href="https://www.facebook.com" target="_blank"></a>
                    </i>
                    <i>
                        <a className="fa fa-twitter" href="https://www.twitter.com" target="_blank"></a>
                    </i>
                </div>
            </div>
            <div className="copyright">
                &copy; 2023 Starlight. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
