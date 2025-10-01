import { useState } from "react";

const App = () => {
  const [item, setItem] = useState(["JavaScript"]);
  const [input, setInput] = useState("");

  const addItem = () => {
    setItem([...item, input]);
    setInput("");
  };

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div>
          <input
            className="bg-white border border-red-400 text-black px-2 py-1.5"
            placeholder="Enter Item here"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-600 px-2.5 py-1.5 border rounded hover:cursor-pointer hover:bg-blue-400"
            onClick={addItem}
          >
            Add Item!
          </button>
        </div>
        <div>
          {" "}
          {item.map((items, index) => (
            <p
              className="bg-amber-50 p-2 text-black font-bold leading-1.5"
              key={index}
            >
              {items}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
