import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton() {

  const { addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [isImportant, setIsImportant] = React.useState(false);
  const [isUrgent, setIsUrgent] = React.useState(false);

  const checkboxOnChange = (value, hook) => {
    hook(!value);
  }
  const onChange = (event) => {
    if(event.target.value.match(/^\$i/)) {
      setIsImportant(!isImportant);
      setNewTodoValue('');
    }
    else if (event.target.value.match(/^\$u/)) {
      setIsUrgent(!isUrgent);
      setNewTodoValue('');
    }
    else {
      setNewTodoValue(event.target.value);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length 
      !== 0) {
    addTodo(newTodoValue, isImportant, isUrgent);
    setIsImportant(false);
    setIsUrgent(false);
    setNewTodoValue('');
    }
  }

  return (
    <form
      className="CreateTodoButton"
      onSubmit={onSubmit}
    >
      <div className="CreateTodoButton-taskbar">
        <button
          className="CreateTodoButton-taskbar-button"
          type="submit"
        >
          +
        </button>
        <input
          value={newTodoValue}
          className="CreateTodoButton-taskbar-input"
          placeholder="Create a new task..."
          onChange={onChange}
        />

      </div>
      <div className="CreateTodoButton-tagbar">
        <span className="tagbar-input bg-pink">
          <input 
            type="checkbox" 
            id="important" 
            name="todo-tag" 
            checked={isImportant}
            onChange={() => checkboxOnChange(isImportant, setIsImportant)}/>
          <label className="noselect" htmlFor="important">Important</label>
        </span>
        <span className="tagbar-input bg-red">
          <input 
            type="checkbox"
            id="urgent"
            name="todo-tag"
            checked={isUrgent}
            onChange={() => checkboxOnChange(isUrgent, setIsUrgent)} />
          <label className="noselect" htmlFor="urgent">Urgent</label>
        </span>
      </div>
    </form>
  );
}

export { CreateTodoButton };