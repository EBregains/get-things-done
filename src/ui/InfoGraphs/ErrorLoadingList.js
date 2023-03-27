import React from "react";
import './InfoGraph.css'

function ErrorLoadingList() {
  return (
    <section className="InfoGraph">
      <p className="InfoGraph-p">Whoops! Something is wrong back here...</p>
      <span className="InfoGraph-icon">😵‍💫</span>
      <p className="InfoGraph-p">We are sorry! Try reloading the page, we'll solve this soon</p>
    </section>
  )
}

export { ErrorLoadingList };