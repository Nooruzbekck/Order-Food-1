import { Modal } from "../../components/modal/Modal";
import { Button } from "../../components/UI/Button";
import "./MainOrder.css";
import { Products } from "./Products.1";

export const MainOrder = () => {
  return (
    <Modal isOpen>
      <Button className="order-food">Order</Button>

      {Products.map((item) => (
        <div key={item.id} {...item}>
          <h1 className="Order_h1">{item.title}</h1>
          <p className="Price-Order">{item.price}</p>
        </div>
      ))}

    </Modal>

  );
};
