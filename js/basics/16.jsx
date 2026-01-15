import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JS", done: false },
    { id: 2, text: "Learn React", done: true },
    { id: 3, text: "Build projects", done: false },
  ]);

  function toggleTodo(id) {
    // logic here
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
        </div>
      ))}
    </div>
  );
}

export default App;
