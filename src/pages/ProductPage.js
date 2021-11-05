import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/products/" + id)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.data);
      })
      .catch((err) => {
        console.log(`An error has occurred: ${err}`);
      });
  }, []);

  return (
    <div id="container">
      <Header />
      <main>
        <section id="product-description">
          <div className="row md-center d-flex product-description">
            <div className="col col-xs-2">
              <div className="product-img">
                <img src={product.productURL} alt={product.name} />
              </div>
            </div>
            <div className="col col-lg-5">
              <div className="product-name">
                <h2>{product.name}</h2>
              </div>
              <div className="product-desc">
                <h4>{product.description}</h4>
                <p>{product.quantity} left in stock.</p>
              </div>
            </div>
            <div className="col col-xs-3">
              <div className="purchase-bar">
                <h4>${product.price}</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
