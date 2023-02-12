import React from "react";
import "./InfoGraph.css"

function EmptySearch({searchedText}) {
  return (
    <section className="InfoGraph">
      <p className="InfoGraph-p">There's no task called "{searchedText}"... YET!</p>
    </section>
  )
}

export {EmptySearch};