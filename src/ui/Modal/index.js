import React from "react";
import "./Modal.css"

function Modal(props) {
  return (
    <section className="ModalBackground">
      <div className="Modal">
        {props.children}
      </div>
    </section>
  );
}

export { Modal };