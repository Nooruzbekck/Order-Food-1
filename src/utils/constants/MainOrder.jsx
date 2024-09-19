import { Modal } from "../../components/modal/Modal";
import "./MainOrder.css";
import { Products } from "./Products.1";

export const MainOrder = () => {
  return (
    <Modal isOpen>
      
      {Products.map((item) => (
        <div key={item.id} {...item}>
          <h1 className="Order_h1">{item.title}</h1>
          <p className="Price-Order">{item.price}</p>
        </div>
      ))}
    </Modal>
  );
};
