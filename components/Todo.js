import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

function TodoLike() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("app effect");
  }, []);
}

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const [count, setCount] = useState(0);

  // const submitUpdate = value => {
  //   updateTodo(edit.id, value);
  //   setEdit({
  //     id: null,
  //     value: ''
  //   });
  // };

  // if (edit.id) {
  //   return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  // }

  function onNoteCount() {
    setCount((prev) => prev + 1);
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <button onClick={() => removeTodo(todo.id)} className="delete-icon">
          {" "}
          Delete
        </button>
        <button onClick={() => completeTodo(todo.id)} className="check-icon">
          {" "}
          Check
        </button>

        <button onClick={() => onNoteCount(todo.id)} className="Like-icon">
          {" "}
          {count} Like
        </button>
      </div>
    </div>
  ));
};

export default Todo;
