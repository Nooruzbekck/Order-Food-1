import React from "react";
import { products } from "../utils/constants/products";
import { ButtonAdd } from "./UI/button/ButtonAdd";

export const ProductsList = () => {
  return (
    <div className="container-map">
      {products.map((product) => (
        <div key={product.id} className="leaf-list">
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>${product.prais}</span>
            <div>{product.li}</div>
          </div>
          <div>
         <label>
         Amount
         <input type="number" />
         </label>
            <ButtonAdd>Add</ButtonAdd>
          </div>
        </div>
      ))}
    </div>
  );
};
