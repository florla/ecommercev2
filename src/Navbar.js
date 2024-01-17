import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="products.html">Products</a>
                <a href="contact.html">Contact</a>
            </div>

            <div>
                <a href="index.html">
                    <img id="logo" src="/photos/logo.png" alt="Starlight Logo" />
                </a>
            </div>

            <div className="nav-icons">
                <img id="search" src="/photos/search.svg" alt="search icon" />
                <img id="bag" src="/photos/bag.svg" alt="shopping bag icon" />
            </div>
        </nav>
    );
};

export default Navbar;
