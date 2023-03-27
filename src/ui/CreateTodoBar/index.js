import React from "react";
import './CreateTodoBar.css';

function CreateTodoBar({ addTodo , loading}) {

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [isImportant, setIsImportant] = React.useState(false);
  const [isUrgent, setIsUrgent] = React.useState(false);

  const checkboxOnChange = (value, hook) => {
    hook(!value);
  }

  const onChange = (event) => {
    if(event.target.value.match(/\$i/)) {
      setIsImportant(!isImportant);
      setNewTodoValue(event.target.value.replace(/\$i/, ''));
    }
    else if (event.target.value.match(/\$u/)) {
      setIsUrgent(!isUrgent);
      setNewTodoValue(event.target.value.replace(/\$u/, ''));
    }
    else {
      setNewTodoValue(event.target.value);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length !== 0) {
    addTodo(newTodoValue, isImportant, isUrgent);
    setIsImportant(false);
    setIsUrgent(false);
    setNewTodoValue('');
    }
  }

  return (
    <form
      className="CreateTodoBar"
      onSubmit={onSubmit}
    >
      <div className="CreateTodoBar-taskbar">
        <button
          className="CreateTodoBar-taskbar-button"
          type="submit"
        >
          +
        </button>
        <input
          value={newTodoValue}
          className="CreateTodoBar-taskbar-input"
          placeholder="Create a new task..."
          onChange={onChange}
          disabled={loading}
        />

      </div>
      <div className="CreateTodoBar-tagbar">
        <span className="tagbar-input bg-pink">
          <input 
            type="checkbox" 
            id="important" 
            name="todo-tag" 
            checked={isImportant}
            onChange={() => checkboxOnChange(isImportant, setIsImportant)}
            disabled={loading}
            />
          <label className="noselect" htmlFor="important">Important</label>
        </span>
        <span className="tagbar-input bg-red">
          <input 
            type="checkbox"
            id="urgent"
            name="todo-tag"
            checked={isUrgent}
            onChange={() => checkboxOnChange(isUrgent, setIsUrgent)} 
            disabled={loading}
            />
          <label className="noselect" htmlFor="urgent">Urgent</label>
        </span>
      </div>
    </form>
  );
}

export { CreateTodoBar };