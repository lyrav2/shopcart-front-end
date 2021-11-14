import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../assets/css/App.css";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductListingPage from "../pages/ProductListingPage";
import RegisterPage from "../pages/RegisterPage";
import ProductContext from "../context/ProductContext";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";

const App = () => {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.data);
      })
      .catch((err) => {
        console.log(`An error has occurred: ${err}`);
      });
  }, []);

  return (
    <Router>
      <ProductContext.Provider value={{ products, setProducts }}>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/products">
            <ProductListingPage/>
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/categories">
            <CategoryPage />
          </Route>
          <Route exact path="/product/details/:id">
            <ProductPage />
          </Route>
        </Switch>
      </ProductContext.Provider>
    </Router>
  );
};

export default App;
