import { useState } from "react";

const App = () => {
  const [myName, setmyName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const savedName = () => {
    localStorage.setItem("My name", myName);
    alert("Name Saved");
  };

  const loadName = () => {
    const saved = localStorage.getItem("My name");
    setDisplayName(saved);
  };

  return (
    <>
      <div className="space-x-1">
        <input
          value={myName}
          onChange={(e) => setmyName(e.target.value)}
          type="text"
          className="bg-white text-black px-2 py-1"
          placeholder="Please enter your name"
        />
        <button
          onClick={savedName}
          className="bg-blue-600 text-white font-bold rounded px-2 py-1"
        >
          Save
        </button>
        <button
          onClick={loadName}
          className="bg-green-600 text-white font-bold rounded px-2 py-1"
        >
          Load
        </button>
        <p className="text-white font-bold ">Loaded Name: {displayName}</p>
      </div>
    </>
  );
};

export default App;
