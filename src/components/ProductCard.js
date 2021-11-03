import React from 'react'
import {Link} from "react-router-dom";

const ProductCard = (props) => {
    return (
        <div className = "product-card">
            <Link to = {`/product/details/{$props.id}`}>
                <img src={props.image} alt={props.title}/>
            </Link>

            <div className="productContent">
                <h3>{props.title}</h3>
                <p>${props.price}</p>
            </div>
        </div>
    )
}

ProductCard.defaultProps = {
title: "test",
price: 5
}

export default ProductCard;