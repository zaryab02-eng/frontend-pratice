import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const resetBtn = () => {
    setText("");
  };

  return (
    <div>
      <div className="h-72 w-52 border border-white flex flex-col justify-center items-center space-y-3">
        <h4 id="display" style={{ color: text.length > 20 ? "red" : "white" }}>
          {text.length === 0
            ? `Start Typing..`
            : text.length > 20
            ? `Limit Reached ${text.length}`
            : `Character Length: ${text.length}`}
        </h4>
        <input
          type="text"
          value={text}
          placeholder="Enter text here"
          className="bg-amber-100 text-black w-44"
          onChange={(e) => setText(e.target.value)}
          disabled={text.length > 25}
        />
      </div>
      <button
        className="px-2.5 py-1 bg-red-600 text-white active:scale-95 cursor-pointer"
        onClick={resetBtn}
      >
        RESET
      </button>
    </div>
  );
};

export default App;
