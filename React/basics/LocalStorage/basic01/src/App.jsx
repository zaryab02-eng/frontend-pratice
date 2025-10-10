import { useState } from "react";

const App = () => {
  const [myName, setmyName] = useState("");

  const savedName = () => {
    localStorage.setItem("My name", myName);
    alert("Name Saved");
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
      </div>
    </>
  );
};

export default App;
