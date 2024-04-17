// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import SaleForm from './components/SaleForm';
import InventoryManagement from './Components/InventoryManagement';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/sales" component={SaleForm} />
          <Route path="/inventory" component={InventoryManagement} />
          <Route path="/" component={ProductList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
