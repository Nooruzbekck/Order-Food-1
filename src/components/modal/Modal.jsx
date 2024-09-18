import ReactDOM from "react-dom";
import "./Modal.css";
export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="wrapper-modal">
      <div className="madal-container">
        <div className="container-div">
          <h2>Barbecue Burger</h2>
          <hr />
          <h2>Schnitzel</h2>
          <hr />
          <h2>Amount</h2>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
