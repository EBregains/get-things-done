// import './App.css';

import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

//  const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false  , important: true, urgent: true },
//   { text: 'Tomar el curso de Platzi', completed: true , important: false, urgent: true },
//   { text: 'LLorar con la llorona', completed: false , important: true, urgent: false },
//   { text: 'Mirar serie', completed: false , important: false, urgent: false },
// ];

function App() {
  return (
      <TodoProvider>
        <AppUI></AppUI>
      </TodoProvider>
  );
}

export default App;