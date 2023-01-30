
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {

  const { numCompletedTodos, numTotalTodos } = React.useContext(TodoContext)
  return (
    <section className="TodoCounter">
      <h1 className="TodoCounter-title">
        <span className="-white">GET</span>
        <span className="-pink">THINGS</span> 
        <span className="-red">DONE.</span>
      </h1>
      <h2 className="TodoCounter-counter">You completed<span>{numCompletedTodos} out of {numTotalTodos}</span></h2>
    </section>
  )
}

export { TodoCounter };