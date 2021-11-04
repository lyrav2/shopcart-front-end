import React from 'react'
import {Link} from "react-router-dom";

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <Link to={`/product/details/${props.id}`}>
                <img src={props.image} alt={props.title}/>
            </Link>

            <div className="productContent">
                <h4>{props.name}</h4>
                <p>${props.price}</p>
                <p>in {props.category}</p>
            </div>
        </div>
    )
}

export default ProductCard;