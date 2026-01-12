import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState([]);

  const addItem = () => {
    setToDo([...toDo, text]);
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
        <button className="bg-red-500 text-white" onClick={addItem}>
          Add
        </button>
      </div>
      <ul className=" bg-white text-black">
        {toDo.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
