import React from "react";
import "./ListItem.css"

function ListItem(props){

  return (
    <li className="ListItem">
      <button
        className={`ListItem--button ${props.active && 'ListItem--active'}`}
        onClick={props.onClick}
      >
        {props.name}
      </button>
      <span className="Icon Icon-delete"
            onClick={props.onDelete}
      >X</span>
    </li>
  );
} 

export { ListItem };