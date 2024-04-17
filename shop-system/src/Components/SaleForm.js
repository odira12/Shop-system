import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SaleForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/sales', { product: selectedProduct, quantity });
      console.log('Sale made successfully');
    } catch (error) {
      console.error('Error making sale:', error);
    }
  };

  return (
    <div>
      <h2>Make a Sale</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product:
          <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
            <option value="">Select a product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </label>
        <button type="submit">Make Sale</button>
      </form>
    </div>
  );
};

export default SaleForm;
