// App.js
import React from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom'; // Import Switch from 'react-router-dom'
import ProductList from './Components/ProductList';
import SaleForm from './Components/SaleForm';
import InventoryManagement from './Components/InventoryManagement';

function App() {
  return (
    <Router>
      <div>
        
          <Route path="/sales" component={SaleForm} />
          <Route path="/inventory" component={InventoryManagement} />
          <Route path="/" component={ProductList} />
        
      </div>
    </Router>
  );
}

export default App;
