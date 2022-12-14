import "./App.scss";
import Nav from "./components/Nav/Nav";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoTask from "./components/TodoTask/TodoTask";
import { useState } from "react";
import tasksArr from "./data/mockData";

const App = () => {
  const [addTask, setAddTask] = useState("");
  const [showTask, setShowTask] = useState(false);

  const handleClick = () => {
    setShowTask(!showTask);
  };

  const handleInput = (event) => {
    const userInput = event.target.value;
    console.log(userInput);
    setAddTask(userInput);
  };

  // const addToTaskArr = () => {
  //   const newTask =
  // };

  return (
    <div>
      <Nav />
      <TodoInput
        label="new task"
        handleInput={handleInput}
        addTask={addTask}
        handleClick={handleClick}
      />
      <TodoTask tasksArr={tasksArr} />
    </div>
  );
};

export default App;
