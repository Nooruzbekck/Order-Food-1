import React from "react";
import { products } from "../utils/constants/products";

export const ProductsList = () => {
  return (
    <div className="container-map">
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>{product.prais}</span>
            <div className="leaf-list">{product.li}</div>
          </div>
          <div>
            <input type="number" />
          </div>
        </div>
      ))}
    </div>
  );
};
