import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, fetchWeather } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(addTask({ id: uuidv4(), text: task, priority }));
      if (task.toLowerCase().includes("outdoor")) {
        dispatch(fetchWeather("New York")); // Fetch weather for a city
      }
      setTask("");
    }
  };

  return (
    <div className="task-input">
      <input type="text" placeholder="Enter task..." value={task} onChange={(e) => setTask(e.target.value)} />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
