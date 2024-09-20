import { Children } from "react";
import { Modal } from "../../components/modal/Modal";
import { Button } from "../../components/UI/Button";
import "./MainOrder.css";
import { Products } from "./Products.1";
import LoginButton from "../../components/buttonlogin/LoginButton";

export const MainOrder = () => {
  return (
    <Modal isOpen>
      <ul className="ul">
        {Products.map((item) => (
          <li key={item.id} {...item} className="div-key">
            <div className="wrapper">
              <p className="Order_h1">{item.title}</p>

              <div className="wrapper_price_amount">
                <p className="Price-Order">${item.price}</p>
                <div>x{1}</div>
              </div>
            </div>

            <div className="general">
              <LoginButton>-</LoginButton>
              <LoginButton>+</LoginButton>
            </div>
          </li>
        ))}

        <div className="total">
          <h1>Total Amount</h1>
          <b className="Price-Order">$200.99</b>
        </div>
        <div className="close">
          <button>Close</button>
          <Button>Order</Button>
        </div>
      </ul>
    </Modal>
  );
};
