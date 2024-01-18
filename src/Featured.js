import React from 'react';

const Featured = () => {
    return (
        <section>
            <h2>Featured Items</h2>

            <section className="featured">
                <div className="item">
                    <img src="/photos/product5.png" alt="Diamond Cross Pearl Necklace" />
                    <h3>$82.99</h3>
                    <h5>Diamond Cross Pearl Necklace</h5>
                </div>

                <div className="item">
                    <img src="/photos/product1.jpg" alt="Silver Y2K Cherry Earrings" />
                    <h3>$22.99</h3>
                    <h5>Silver Y2K Cherry Earrings</h5>
                </div>

                <div className="item">
                    <img src="/photos/product7.png" alt="Lost In Orbit Dangle Earrings" />
                    <h3>$54.99</h3>
                    <h5>Lost In Orbit Dangle Earrings</h5>
                </div>

                <div className="item">
                    <img className="grid-image" src="/photos/product12.png" alt="Pink Crystal Heart Necklace" />
                    <h3>$55.99</h3>
                    <h5>Pink Crystal Heart Necklace</h5>
                </div>
            </section>
        </section>
    );
};

export default Featured;
