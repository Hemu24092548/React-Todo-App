import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const weather = useSelector((state) => state.tasks.weather);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task ${task.priority.toLowerCase()}`}>
          <span>{task.text} - {task.priority}</span>
          <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
        </div>
      ))}
      {weather && (
        <div className="weather-info">
          <p>Weather: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
