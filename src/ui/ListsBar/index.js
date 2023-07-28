import React from "react";
import "./ListsBar.css"

function ListsBar(props) {

  const renderFunc = props.children || props.render;
  
  // custom hook to toggle the ListsBar
  const [visible, setVisible] = React.useState(false);
  const toggleListsBar = () => setVisible(!visible);

  return (
    <section className="ListsBar">
      <button className="ListsBar--toggleButton" onClick={toggleListsBar}>
        Lists {visible ?  "▲":"×"}
      </button>
      <div className={`ListsBar-list ${visible && 'ListsBar--hidden'}`}>
        {props.arrList.map(renderFunc)}
        <button className="ListsBar-newList">
          + New List
        </button>
      </div>
    </section>
  );
}

export { ListsBar };