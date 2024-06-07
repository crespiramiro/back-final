import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

// Corrigiendo la exportación del componente
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/add" component={AddProduct} />
      </Switch>
    </Router>
  );
};

export default Routes; // Moví la exportación al final del archivo