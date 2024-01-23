import React, { useEffect, useState } from "react";
import Footer from './Footer';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('default'); // default is no sorting
  const [filterCategory, setFilterCategory] = useState('all'); // 'all' is no category filter

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => {
        console.log('Data received:', data);
        setProducts(data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const filteredProducts = products
    .filter(product => filterCategory === 'all' || product.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'lowestToHighest') {
        return a.price - b.price;
      } else if (sortBy === 'highestToLowest') {
        return b.price - a.price;
      } else {
        return 0; // No sorting
      }
    });

  const handleSortChange = event => {
    setSortBy(event.target.value);
  };

  const handleCategoryChange = event => {
    setFilterCategory(event.target.value);
  };

  return (
    <div>
      <div className="filter-options">
        <label htmlFor="sortBy">Sort by Price:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="lowestToHighest">Lowest to Highest</option>
          <option value="highestToLowest">Highest to Lowest</option>
        </select>

        <label htmlFor="filterCategory">Filter by Category:</label>
        <select id="filterCategory" value={filterCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Earrings">Earrings</option>
        </select>
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="item">
            <img src={`photos/${product.imageurl}`} alt={product.name} />
            <h3>${product.price}</h3>
            <h5>{product.name}</h5>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
