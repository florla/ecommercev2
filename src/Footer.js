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
                &copy; 2023 Starlight. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
