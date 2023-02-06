
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {

  const setCounterIcon = (total, done) => {
    if (done !== 0) {
      let ratio = total / done;
      if ( ratio === 1) return '😎';
      else if ( ratio <= 1.3) return '🙂'
      else if ( ratio <= 2) return '😰';
      else if ( ratio <= 3) return '🥵';
      else return '🫠';
    } else if (total !== 0) {
      return '🥱';
    } else return '😶';
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