import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  addTodo,
  deleteTodo,
  markAsDone,
  MarkAsPending,
} from "../store/slices/todo";

const Todo = () => {
  const todolist = useSelector((state) => state.todo);
  const pendingTodos = todolist.filter((item) => item.status === 0);
  const completedTodos = todolist.filter((item) => item.status === 1);

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const dataList = { id: id, name: todo, status: 0 };
    dispatch(addTodo(dataList));
    setTodo("");
  };
  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };
  const handleMarkAsPending = (id) => {
    dispatch(MarkAsPending(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="App">
      <h1>📋 My tasks</h1>

      <div id="form">
        <div className="new-task-form">
          <input
            id="new-task"
            placeholder="enter your task"
            onChange={(e) => setTodo(e.target.value)}
          />
          <input type="submit" value="➡️" onClick={handleSubmit} />
        </div>

        <ul id="tasks">
          {pendingTodos.length > 0 ? <li className="divider">To do</li> : null}
          {pendingTodos.length > 0 ? (
            pendingTodos.map((item) => (
              <li className="task" key={item.id}>
                <label title="Complete task">
                  <input
                    type="checkbox"
                    value={item.id}
                    className="box"
                    title="Complete task"
                    onClick={() => handleMarkAsDone(item.id)}
                  />
                  <span className="text">{item.name}</span>
                </label>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="delete"
                  title="Delete task"
                >
                  ╳
                </button>
              </li>
            ))
          ) : (
            <li className="divider">No Tasks Defined</li>
          )}

          {completedTodos.length > 0 ? <li className="divider">Completed</li> : null}

          {completedTodos.length > 0
            ? completedTodos.map((item) => (
              <li className="task completed" key={item.id}>
                <label title="Reopen task">
                  <input
                    type="checkbox"
                    checked
                    value={item.id}
                    className="box"
                    title="Reopen task"
                    onClick={() => handleMarkAsPending(item.id)}
                  />
                  <span className="text">{item.name}</span>
                </label>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="delete"
                  title="Delete task"
                >
                  ╳
                </button>
              </li>
            ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default Todo
