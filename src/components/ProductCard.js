import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="card-img">
        <Link to={`../product/details/${props.id}`}>
          <img
            className="img-responsive product-card-img"
            src={props.image}
            alt={props.title}
          />
        </Link>
      </div>

      <div className="product-content">
        <h4>{props.name}</h4>
        <p>${props.price}</p>
        <p>in {props.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
