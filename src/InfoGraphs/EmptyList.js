import React from "react";
import './InfoGraph.css';

function EmptyList() {
  return (
    <section className="InfoGraph">
      <p className="InfoGraph-p">Seems to quiet here...</p>
      <span className="InfoGraph-icon">
        🤔
      </span>
      <p className="InfoGraph-p">Start writing those tasks down and get them done!</p>
    </section>
  );
}

export { EmptyList };