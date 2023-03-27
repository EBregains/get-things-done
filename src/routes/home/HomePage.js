
import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { CreateTodoBar } from "../../ui/CreateTodoBar";
import { EmptyList } from "../../ui/InfoGraphs/EmptyList";
import { ErrorLoadingList } from "../../ui/InfoGraphs/ErrorLoadingList";
import { LoadingSkeleton } from "../../ui/InfoGraphs/LoadingSkeleton";
import { EmptySearch } from "../../ui/InfoGraphs/EmptySearch";
import { Modal } from "../../ui/Modal"
import { QuoteGenerator } from "../../ui/QuoteGenerator";
import { CatMemes } from "../../ui/CatMemes";
import { ToggleModalButton } from "../../ui/ToggleModalButton"

function HomePage() {

  // Custom hook
  const { state, stateUpdaters } = useTodos();
  // Destructuring hook state
  const {
    openModal,
    loading,
    error,
    florMode,
    numTotalTodos,
    numCompletedTodos,
    searchValue,
    searchedTodos,
  } = state;
  // Destructuring hook state updaters
  const {
    setOpenModal,
    setSearchValue,
    addTodo,
    toggleCheckTodo,
    deleteTodo,
  } = stateUpdaters;


  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          numCompletedTodos={numCompletedTodos}
          numTotalTodos={numTotalTodos} 
        />
        <CreateTodoBar 
          addTodo={addTodo}
          loading={loading}
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
        onEmptySearchResult={() =>  <EmptySearch 
                                      searchedText={searchValue}
                                    />}
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
        loading={loading}
      />
 
      {!!openModal && (
        <Modal>
          <QuoteGenerator></QuoteGenerator>
          <CatMemes></CatMemes>
        </Modal>
      )}

      <ToggleModalButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      
      {florMode && <p className="Flor">🌸</p>}
    </React.Fragment>
  )
}

export { HomePage };