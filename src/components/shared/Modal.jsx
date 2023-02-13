import ReactDOM from "react-dom";
import Form from "../modal/Form";

export default function Modal({ open, onClose }) {
  const PortalElement = document.getElementById("portal");

  if (!open) return null;

  return ReactDOM.createPortal(
    <div id="Modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2>Create a new Item</h2>
        <Form />
        <button className="link-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>,
    PortalElement
  );
}
