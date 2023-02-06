import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

  // Recibing data from custom hook
  const {
    item: arrTodos,
    saveItemLocal: saveTodosLocal,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  // SETTING UP REACT HOOKS
  const [searchValue, setSearchValue] = React.useState('');
  
  //  Variables to hold the counts of todos
  const numCompletedTodos = arrTodos.filter( todo => !!todo.completed ).length;
  const numTotalTodos = arrTodos.length;

  // Array that will be rendered
  let searchedTodos = [];

  // If the searching bar is blank assign the hole list every cicle
  if (!searchValue) {
    searchedTodos = arrTodos;
  } else { // If not converts to lower case and filters the list
    searchedTodos = arrTodos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = ( text, isImportant, isUrgent) => {
    // Check for duplicates
    arrTodos.forEach((todo) => {
      let sufix = '';
      if (todo.text === text) {
        sufix = ` #`;
      }
      text = text + sufix
    });
    const newArrTodos = [...arrTodos];
    newArrTodos.push({
      text,
      completed: false,
      urgent: isUrgent,
      important: isImportant,
    });
    sortTodos(newArrTodos);
    saveTodosLocal(newArrTodos);
  }
  // Function that calls the todos hook
  const toggleCheckTodo = (text) => {
    const todoIndex = arrTodos.findIndex( todo => todo.text === text);
    const newArrTodos = [...arrTodos];
    newArrTodos[todoIndex].completed = !newArrTodos[todoIndex].completed;
    sortTodos(newArrTodos);
    saveTodosLocal(newArrTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = arrTodos.findIndex( todo => todo.text === text);
    const newArrTodos = [...arrTodos];
    newArrTodos.splice(todoIndex, 1);
    saveTodosLocal(newArrTodos);
  };

  const sortTodos = (arrToSort) => {
    arrToSort.sort((a ,b) => b.important - a.important);
    arrToSort.sort((a ,b) => b.urgent - a.urgent);
    arrToSort.sort((a ,b) => a.completed - b.completed);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      numTotalTodos,
      numCompletedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      toggleCheckTodo,
      deleteTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };