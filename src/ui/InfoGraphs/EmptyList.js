import React from "react";
import './InfoGraph.css';

function EmptyList() {
  return (
    <section className="InfoGraph">
      <span className="InfoGraph-icon">😶</span>
      <p className="InfoGraph-p">No tasks around here yet...</p>
    </section>
  );
}

export { EmptyList };