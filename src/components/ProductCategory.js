import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/?categories=true`)
      .then((response) => response.json())
      .then((json) => {
        setCategories(json.data);
      })
      .catch((err) => {
        console.log(`An error has occurred: ${err}`);
      });
  }, []);

  const categoryList = categories.map((category) => (
    <div class="product-category">
      <Link to="/products">
        <img className="category-img" src={`/${category}.png`} alt={category} />
        <p>{category}</p>
      </Link>
    </div>
  ));

  return (
    <section className="product-list-container">
      <div class="container">
        <Link to="/categories">
          <h3>Product Categories</h3>
        </Link>
        <div className="categories">{categoryList}</div>
      </div>
    </section>
  );
};

export default ProductCategory;
