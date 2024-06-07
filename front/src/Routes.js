import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList.jsx';
import AddProduct from './components/AddProduct.jsx';

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
  
  export default Routes;