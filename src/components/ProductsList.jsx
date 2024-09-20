import React, { useState } from "react";
import { products } from "../utils/constants/products";
import { ButtonAdd } from "./UI/button/ButtonAdd";
import { Input } from "./Input";

export const ProductsList = ({ onAddOrder }) => {
  const [amounts, setAmounts] = useState(0);

  const addProductHandler = (product) => {
    onAddOrder(product);
    setAmounts(0);
  };

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
          <div className="pulse-add">
            <label>
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
        </div>
      ))}
    </div>
  );
};
