const todos = [
  { id: 1, text: "Learn JS", done: false },
  { id: 2, text: "Learn React", done: true },
  { id: 3, text: "Build projects", done: false },
];

function toggleTodo(todos, id) {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done };
    }
    return todo;
  });
}

console.log(toggleTodo(todos, 2));
