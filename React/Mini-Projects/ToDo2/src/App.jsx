import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState([]);

  const addButton = () => {
    setToDo([...toDo, text]);
    setText("");
  };

  const deleteButton = (index) => {
    setToDo(toDo.filter((to, idx) => idx !== index));
  };

  return (
    <div>
      <div className="bg-gray-500 h-96 p-2">
        <div className="translate-y-6">
          <input
            type="text"
            placeholder="Enter your todo here"
            className="bg-white text-black py-1 px-2"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            className="px-2.5 py-1 bg-red-500 rounded"
            onClick={addButton}
            disabled={text.trim() === ""}
          >
            Add
          </button>
        </div>

        <ul className="h-64 bg-red-500 translate-y-14 p-2">
          {toDo.map((todo, idx) => {
            return (
              <li className="text-white" key={idx}>
                {todo}
                <button
                  className="bg-red-600 text-white p-2 rounded-2xl"
                  onClick={() => deleteButton(idx)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
