// import './App.css';

import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyList } from "../InfoGraphs/EmptyList";
import { ErrorLoadingList } from "../InfoGraphs/ErrorLoadingList";
import { LoadingSkeleton } from "../InfoGraphs/LoadingSkeleton";
import { TodoHeader } from "../TodoHeader";

function App() {

  const {
    error,
    loading,
    florMode,
    searchedTodos,
    toggleCheckTodo,
    deleteTodo,
    numCompletedTodos,
    numTotalTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          numCompletedTodos={numCompletedTodos}
          numTotalTodos={numTotalTodos} 
        />
        <CreateTodoButton 
          addTodo={addTodo}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <ErrorLoadingList />}
        onLoading={() => <LoadingSkeleton />}
        onEmptyTodos={() => <EmptyList />}
        render={todo => (
          <TodoItem key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          important={todo.important}
          urgent={todo.urgent}
          onComplete={() => toggleCheckTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
        )}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {florMode && <p className="Flor">🌸</p>}
    </React.Fragment>
  )
}

export default App;