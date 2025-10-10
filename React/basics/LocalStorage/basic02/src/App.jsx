import { useState } from "react";

const App = () => {
  const [nameList, setNameList] = useState([]);
  const [input, setInput] = useState("");
  const [diplayName, setDiplayName] = useState([]);

  const addName = () => {
    const newName = [...nameList, input];
    setNameList(newName);
    localStorage.setItem("nameList", JSON.stringify(newName));
    setInput("");
  };

  const loadName = () => {
    const saved = localStorage.getItem("nameList");
    if (saved) {
      setDiplayName(JSON.parse(saved));
    }
  };

  return (
    <>
      <div className="space-x-1.5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a name"
          className="bg-white text-black px-2.5 outline-none py-1 rounded"
        />
        <button
          onClick={addName}
          className="bg-blue-600 cursor-pointer hover:bg-blue-500 px-2.5 py-1 rounded"
        >
          Add
        </button>
        <button
          onClick={loadName}
          className="bg-green-600 cursor-pointer hover:bg-green-500 px-2.5 py-1 rounded"
        >
          Load
        </button>
        <ul className="text-white">
          {diplayName.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
