
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
import { ListsBar } from "../../ui/ListsBar"; 
import { Modal } from "../../ui/Modal";
import { CatMemes } from "../../ui/Modal/CatMemes";
import { ListItem } from "../../ui/ListItem";

// const getRandomNumber = () => random(1, 123);

const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
};

function HomePage() {

  // Custom hook
  const { state, stateUpdaters } = useTodos();
  // Destructuring hook state
  const {
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
  } = state;
  // Destructuring hook state updaters
  const {
    setActiveList,
    // setOpenModal,
    setSearchValue,
    addTodo,
    toggleCheckTodo,
    deleteTodo,
    deleteList,
  } = stateUpdaters;

  // const [image, setImage] = React.useState([]);

  // const AddFox = (event) => {
  //   const newImageItem = { 
  //     id: generateKey(`img`),
  //     url: `https://randomfox.ca/images/${getRandomNumber()}.jpg`
  //   };
  //   setImage([...image, newImageItem]);
  //   window.plausible('add_fox');
  // };

  // openModal = true;
  
  return (
    <React.Fragment>
      <ListsBar
        activeList={activeList}
        arrList={arrList}
        render={ item =>
          (<ListItem key={item.id}
            onClick={() => setActiveList(item.id)}
            onDelete={() => deleteList(item.id)}
            name={item.name}
            active={item.id === activeList}
          />)
        }
      />
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
      
      {/* <ToggleModalButton></ToggleModalButton> */}
      {!!openModal && (
        <Modal>
          <CatMemes></CatMemes>
        </Modal>
      )}
      
      {florMode && <p className="Flor">🌸</p>}
    </React.Fragment>
  )
}

export { HomePage };