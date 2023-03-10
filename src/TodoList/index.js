import React from "react";
import './TodoList.css';

function TodoList(props) {
  return (
    <section className="TodoList">
      <ul>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.searchedTodos.length && !props.searchedText) && props.onEmptyTodos()}

      {(!!props.numTotalTodos && !props.searchedTodos.length) && props.onEmptySearchResult()}
      {props.searchedTodos.map(props.render)}
      </ul>
    </section>
  );
}

export { TodoList }