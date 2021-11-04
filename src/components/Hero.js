import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductListingPage from "../pages/ProductListingPage";

const Hero = () => {
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

  const heroList = products.map((product) => (
    <div class="carousel-item">
      <img
        key={product.id}
        class="d-block w-100"
        src={product.productURL}
        alt="Slide"
      />
    </div>
  ));

  return (
    <div id="container">
      <h2>Shop the latest and greatest.</h2>
      <div id="hero-section" className="hero-section">
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <img
                className="hero-image d-block w-auto h-auto"
                src={product.productURL}
                alt={product.description}
              />
              <Carousel.Caption>
                <p>{product.name}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
