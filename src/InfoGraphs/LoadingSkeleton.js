import React from "react";
import './InfoGraph.css'

function LoadingSkeleton() {
  return (
    <section className="InfoGraph">
      <span className="InfoGraph-icon loadingItem">⏳</span>
    </section>
  )
}

export { LoadingSkeleton };