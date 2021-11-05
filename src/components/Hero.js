import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import ProductListingPage from "../pages/ProductListingPage";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Hero() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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

  return (
    <div id="container">
      <div id="hero-section" className="hero-section">
        <h2>Shop the latest and greatest.</h2>
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <a href={`../product/details/${product.id}`}>
              <img
                className="hero-image d-block w-auto h-auto"
                src={product.productURL}
                alt={product.description}
              />
              </a>
              <Carousel.Caption>
                <div className="hero-section-title">
                  <p>{product.name}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
