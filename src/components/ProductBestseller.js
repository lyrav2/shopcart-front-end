import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductBestseller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/?bestseller=true`)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(`An error has occurred: ${err}`);
      });
  }, []);

  const bestsellerList = products.map((product) => (
    <div className="product-bestseller" key={product.id}>
      <Link to={`/product/details/${product._id}`} src={product.productURL}>
        <a href="/" className="bestseller-product">
          <img
            className="bestseller-product"
            src={product.productURL}
            alt={product.description}
          />
        </a>
      </Link>
    </div>
  ));

  return (
    <div className="container">
      <h3>Best Selling Products</h3>
      <div className="bestseller">
        <div className="row">
          <div className="col">{bestsellerList}</div>
        </div>
      </div>
      <div className="view-more">
        <Link to={"/products"}>
          <p>View more bestselling products...</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductBestseller;
