import { Children } from "react";
import { Modal } from "../../components/modal/Modal";
import { Button } from "../../components/UI/Button";
import "./MainOrder.css";
import { Products } from "./Products.1";

export const MainOrder = () => {
  return (
    <Modal isOpen>
    <ul>
    {Products.map((item) => (
        <li key={item.id} {...item} className="div-key">
               
          <h1 className="Order_h1">{item.title}</h1>
       

          <p className="Price-Order">
            {item.price}
       
            <div className="general">
          <button className="btnicon">-</button>
          <button className="btnicon">+</button>
          </div>

         
          </p>
      
        </li>
      ))}
   
      <button>Close</button>
      <Button>Order</Button>
    </ul>
    </Modal>
  );
};
