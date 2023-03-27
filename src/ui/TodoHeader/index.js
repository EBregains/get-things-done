import React from "react";

function TodoHeader({ children }) {
  return (
    <header className="TodoHeader">
      {children}
    </header>
  )
}

export { TodoHeader };