import React from 'react';
import Footer from './Footer';
import Carouselslide from './Carousel';
import Featured from './Featured';


export default function Home() {
    return (
        <div>
            <Carouselslide/>
            <Featured />
            <Footer />
        </div>
    );
};