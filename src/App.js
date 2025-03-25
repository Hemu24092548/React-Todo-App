import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/authSlice";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {isAuthenticated ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
};

export default App;
