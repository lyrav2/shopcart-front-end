import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductBestseller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products/?bestseller=true")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.data);
      })
      .catch((err) => {
        console.log(`An error has occurred: ${err}`);
      });
  }, []);

  const bestsellerList = products.map((product) => (
    <div className="product-bestseller" key={product.id}>
      <Link to={`/product/details/${product._id}`} src={product.productURL}>
        <a href="/" className="bestseller-product"><img className="bestseller-product" src={product.productURL} alt={product.description}/></a>
      </Link>
    </div>
  ));

  return (
    <div class="container">
      <h3>Best Selling Products</h3>
      {bestsellerList}
    </div>
  );
};

export default ProductBestseller;
