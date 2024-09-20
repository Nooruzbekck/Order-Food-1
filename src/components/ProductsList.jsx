import React, { useState } from "react";
import { products } from "../utils/constants/products";
import { ButtonAdd } from "./UI/button/ButtonAdd";
import { Input } from "./Input";

export const ProductsList = ({ onAddOrder }) => {
  const [amounts, setAmounts] = useState(0);

  const addProductHandler = (product) => {
    onAddOrder(product);
    setAmounts(0);
    setAmounts("");
  };

  return (
    <ul className="container-map">
      {products.map((product) => (
        <li key={product.id} className="leaf-list">
          <div className="products">
            <h2>{product.title}</h2>
            <i>{product.description}</i>
            <div>{product.li}</div>
            <span>${product.prais}</span>
          </div>
          <div className="pulse-add">
       
         <label className="add-input">
              Amount
              <Input
                type="number"
                min={0}
                max={5}
                onChange={(e) => {
                  const value = Math.max(Math.min(5, e.target.value));
                  e.target.value = value;
                }}
              />
            </label>
            <ButtonAdd onClick={() => addProductHandler(product)}>
              Add
            </ButtonAdd>
          </div>
        </li>
      ))}
    </ul>
  );
};
