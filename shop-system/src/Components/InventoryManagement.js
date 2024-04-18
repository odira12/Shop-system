import React, { useState } from 'react';
import axios from 'axios';

const InventoryManagement = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = async () => {
    try {
      await axios.post('/api/products', { name, price });
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      console.log('Product removed successfully');
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <div>
        <h3>Add Product</h3>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div>
        <h3>Remove Product</h3>
        <label>
          Product ID:
          <input type="text" />
        </label>
        <button onClick={handleRemoveProduct}>Remove Product</button>
      </div>
    </div>
  );
};

export default InventoryManagement;
