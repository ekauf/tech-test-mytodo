import "./TodoTask.scss";
import { useState } from "react";

const TodoTask = ({ label }) => {
  const [showTask, setShowTask] = useState(false);

  const handleClick = () => {
    setShowTask(!showTask);
  };

  return (
    <div className="todo-task">
      <input className="todo-task__input-tick" type="checkbox" id="task" />
      <label className="todo-task__label" htmlFor="task">
        {label}
      </label>
      <button className="todo-task__button-del" type="submit">
        -
      </button>
    </div>
  );
};

export default TodoTask;
