import React from 'react';
import Footer from './Footer';
import Carousel from './Carousel';
import Featured from './Featured';


export default function Home() {
    return (
        <div>
            <Carousel />
            <Featured />
            <Footer />
        </div>
    );
};