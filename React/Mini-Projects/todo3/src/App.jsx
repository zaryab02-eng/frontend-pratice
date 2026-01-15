import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState([]);

  const addItem = () => {
    setToDo([...toDo, { text, done: false }]);
    setText("");
  };

  const deleteButton = (deleteIndex) => {
    setToDo(toDo.filter((to, idx) => idx !== deleteIndex));
  };

  const toggleDone = (index) => {
    setToDo(
      toDo.map((item, idx) =>
        idx === index ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="space-y-1">
      <div className="space-x-1">
        <input
          type="text"
          value={text}
          placeholder="enter here"
          className="bg-white placeholder:text-black text-black"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-red-500 text-white"
          onClick={addItem}
          disabled={text.trim() === ""}
        >
          Add
        </button>
      </div>
      <ul className=" bg-white text-black w-59 h-50 overflow-y-auto p-1">
        {toDo.map((item, idx) => (
          <li
            key={idx}
            onClick={() => toggleDone(idx)}
            style={{
              textDecoration: item.done ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {item.text}
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={(e) => {
                e.stopPropagation();
                deleteButton(idx);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
