import React from 'react';

const Carousel = () => {
    return (
        <div class="carousel">
            <div class="carousel-slide">
                <img src="/photos/sale.png" alt="We love a sale 25% off everything"/>
            </div>
            <div class="carousel-slide" alt="New collection coming soon">
                <img src="/photos/collection.png" />
            </div>
            <div class="carousel-slide">
                <img src="/photos/name.png" alt="Starlight Jewelry" />
            </div>
        </div>
    );
};

export default Carousel;
