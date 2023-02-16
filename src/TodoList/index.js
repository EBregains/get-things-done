import React from "react";
import './TodoList.css';

function TodoList(props) {

  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList">
      <ul>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.searchedTodos.length && !props.searchedText) && props.onEmptyTodos()}

      {(!props.searchedTodos.length && props.searchedText) && props.onEmptySearchResult()}

      {!props.loading && props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList }