import "./TodoInput.scss";
import { useState } from "react";

const TodoInput = ({ label, handleInput }) => {
  const [showTask, setShowTask] = useState(false);

  const handleClick = () => {
    setShowTask(!showTask);
  };

  return (
    <div className="todo-input">
      <label className="todo-input__label" htmlFor={label}></label>
      <input
        className="todo-input__input"
        type="text"
        id={label}
        placeholder="Add your task here..."
        onInput={handleInput}
      />
      <button
        onClick={handleClick}
        className="todo-input__button"
        type="submit"
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
