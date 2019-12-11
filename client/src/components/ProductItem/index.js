import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProductItem({
  thumbnailImage,
  name,
  shortDescription,
  sku,
  salePrice
}) {
  return (
    <div className="productItemContainer">
      <Link to={`/products/${sku}`}>
        <img className="productImage img-fluid" src={thumbnailImage} alt="product" />
        <div className="productTitleContainer">
          <p className="detailLink">{name}</p>
        </div>
      </Link>
      <div className="productDescriptionContainer" >
        <span className="productPrice">${salePrice}</span>
        <p className="description">{shortDescription} </p>
      </div>
    </div>
  );
}

export default ProductItem;
