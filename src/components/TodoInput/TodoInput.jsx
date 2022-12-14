import "./TodoInput.scss";
import { useState } from "react";

const TodoInput = ({ label, handleInput, handleClick }) => {
  return (
    <div className="todo-input">
      <label className="todo-input__label" htmlFor={label}></label>
      <input
        className="todo-input__input"
        type="text"
        id={label}
        placeholder="Add your task here..."
        onChange={handleInput}
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
