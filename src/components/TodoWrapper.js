import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";

// // camel case
// todoWrapper
// // pascal case - class names, components
// Todo
// TodoWraper
// // upper case
// TODO_WRAPPER
// // snake case
// todo_wrapper
// // kebab case
// todo-wrapper

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: task, completed: false, isEditing: false },
    ]);
  };

  // addTodo("go to shopping 2");

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  // toggleComplete(uuid);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="TodoWrapper">
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Get things done!</h1>
        <button className="todo-btn" onClick={clearAllTodos}>
          Clear All
        </button>
      </div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm todo={todo} key={todo.id} editTask={editTask} />
        ) : (
          <Todo
            todo={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
