import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import '../assets/css/App.css';

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductListingPage from "../pages/ProductListingPage";
import RegisterPage from "../pages/RegisterPage";
import ProductContext from '../context/ProductContext';

const App = () => {
  const [products, setProducts] = useState([({})]);
  return (
    <Router>
      <ProductContext.Provider value={{products, setProducts}}>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/about">
            <AboutPage/>
          </Route>
          <Route exact path="/products">
            <ProductListingPage/>
          </Route>
          <Route exact path="/register">
            <RegisterPage/>
          </Route>
        </Switch>
      </ProductContext.Provider>
    </Router>
  );
}

export default App;
