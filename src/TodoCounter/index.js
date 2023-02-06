
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {

  const setCounterIcon = (total, done) => {
      let left = total - done;
      if ( done === 0) return '🤔'
      if ( left === 0) return '😎';
      else if ( left <= 4) return '🙂'
      else if ( left <= 8) return '😰';
      else if ( left <= 12) return '🥵';
      else return '🫠';
  }

  const { numCompletedTodos, numTotalTodos } = React.useContext(TodoContext)
  return (
    <section className="TodoCounter">
      <h1 className="TodoCounter-title">
        <span className="-white">GET</span>
        <span className="-pink">THINGS</span> 
        <span className="-red">DONE.</span>
      </h1>
      <section className="TodoCounter">
        <h2 className="TodoCounter-counter">You completed<span>{numCompletedTodos} out of {numTotalTodos}</span></h2>
        <p className="TodoCounter-counter-icon">{setCounterIcon(numTotalTodos, numCompletedTodos)}</p>
      </section>
    </section>
  )
}

export { TodoCounter };