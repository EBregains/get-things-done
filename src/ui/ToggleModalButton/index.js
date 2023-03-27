import React from "react";
import "./ToggleModalButton.css"

function ToggleModalButton(props) {

  let text = "";

  if (props.openModal) {
    text = "Close. I'm ready!"
  }
  else
  {
    text = "I need some motivation!"
  }

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }
  return (
    <button
      className="ToggleModalButton"
      onClick={onClickButton}
    >
      {text}
    </button>
  )
}

export { ToggleModalButton }