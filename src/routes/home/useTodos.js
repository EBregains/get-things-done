// add comments to the code to explain what it does

import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useModal } from "./useModal";

function useTodos() {

  // Recibing data from custom hook
  const {
    item: arrList,
    saveItemLocal: saveListLocal,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [{ name: 'Your list', todos: [], id: 0 }, { name: 'My list', todos: [], id: 1 }]);

  const {
    openModal,
    setOpenModal,
  } = useModal();

  // SETTING UP REACT HOOKS
  const [activeList, setActiveList] = React.useState(0);
  const [florMode, setFlorMode] = React.useState(false); // Flor mode
  const [searchValue, setSearchValue] = React.useState('');

  //  Variables to hold the counts of todos
  const arrTodos = arrList[activeList].todos;
  const numTotalTodos = arrTodos.length;
  const numCompletedTodos = arrTodos.filter( todo => !!todo.completed ).length;

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
    // Check for duplicates.
    arrTodos.forEach((todo) => {
      let sufix = '';
      if (todo.text === text) {
        sufix = ` #`;
      }
      text = text + sufix
    });
    // Add todo
    const updatedList = arrList[activeList];
    updatedList.todos.push({
      text,
      completed: false,
      urgent: isUrgent,
      important: isImportant,
    });
    sortTodos(updatedList.todos);
    arrList[activeList] = updatedList;
    saveListLocal(arrList);
    // Check for the word "Flor" to start flor mode.
    if ( text.match(/Flor/) ) setFlorMode(true);
  }

  // Function that calls the todos hook
  const toggleCheckTodo = (text) => {
    const todoIndex = arrTodos.findIndex( todo => todo.text === text);
    const updatedList = arrList[activeList];
    updatedList.todos[todoIndex].completed = !updatedList.todos[todoIndex].completed;
    sortTodos(updatedList.todos);
    arrList[activeList] = updatedList;
    saveListLocal(arrList);
  };

  const deleteTodo = (text) => {
    const todoIndex = arrTodos.findIndex( todo => todo.text === text);
    const updatedList = arrList[activeList];
    updatedList.todos.splice(todoIndex, 1);
    arrList[activeList] = updatedList;
    saveListLocal(arrList);
  };

  const deleteList = (id) => {
    saveListLocal(arrList.splice(id, 1));
    if (activeList === id) setActiveList(0);
  };

  const sortTodos = (arrToSort) => {
    arrToSort.sort((a ,b) => b.important - a.important);
    arrToSort.sort((a ,b) => b.urgent - a.urgent);
    arrToSort.sort((a ,b) => a.completed - b.completed);
  };

  const state = {
    arrList,
    activeList,
    openModal,
    loading,
    error,
    florMode,
    numTotalTodos,
    numCompletedTodos,
    searchValue,
    searchedTodos,
  };

  const stateUpdaters = {
    setActiveList,
    setOpenModal,
    setSearchValue,
    addTodo,
    toggleCheckTodo,
    deleteTodo,
    setActiveList,
    deleteList,
  };
    
  return ({ state, stateUpdaters });
}

export { useTodos };