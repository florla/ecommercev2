import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carouselslide = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={5000} showArrows showStatus={false}>
            <div>
                <img src="/photos/sale.png" alt="We love a sale 25% off everything" />
            </div>
            <div>
                <img src="/photos/collection.png" alt="New collection coming soon" />
            </div>
            <div>
                <img src="/photos/name.png" alt="Starlight Jewelry" />
            </div>
        </Carousel>
    );
};

export default Carouselslide;