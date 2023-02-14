// import './App.css';

import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyList } from "../InfoGraphs/EmptyList";
import { ErrorLoadingList } from "../InfoGraphs/ErrorLoadingList";
import { LoadingSkeleton } from "../InfoGraphs/LoadingSkeleton";
import { EmptySearch } from "../InfoGraphs/EmptySearch";
import { Modal } from "../Modal"

function App() {

  const {
    openModal,
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
        numTotalTodos={numTotalTodos}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchedText={searchValue}
        onError={() => <ErrorLoadingList />}
        onLoading={() => <LoadingSkeleton />}
        onEmptyTodos={() => <EmptyList />}
        onEmptySearchResult={() => <EmptySearch searchedText={searchValue}/>}
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
      {!!openModal && (
        <Modal>
          {/* <QuoteGenerator></QuoteGenerator>
          <CatMemes></CatMemes> */}
        </Modal>
      )}
      {florMode && <p className="Flor">🌸</p>}
    </React.Fragment>
  )
}

export default App;