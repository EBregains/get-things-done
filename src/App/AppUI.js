import React from "react"
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyList } from "../InfoGraphs/EmptyList";
import { ErrorLoadingList } from "../InfoGraphs/ErrorLoadingList";
import { LoadingSkeleton } from "../InfoGraphs/LoadingSkeleton";
import './App.css'



function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    toggleCheckTodo,
    deleteTodo
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <CreateTodoButton />
      <TodoList>
        {error && <ErrorLoadingList />}
        {loading && <LoadingSkeleton />}
        {(!loading && !searchedTodos.length) && <EmptyList/>}
        {searchedTodos.map( todo => (
          <TodoItem key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            important={todo.important}
            urgent={todo.urgent}
            onComplete={() => toggleCheckTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoSearch />
    </React.Fragment>
  )
}

export { AppUI };
