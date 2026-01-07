import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const countWords = () => {
    {
      return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    }
  };

  const rstBtn = () => {
    setText("");
  };

  return (
    <div>
      <h3>{`Words Count: ${countWords()}`}</h3>
      <h3>{`Character Count: ${text.length}`}</h3>
      <input
        type="text"
        value={text}
        placeholder="Enter here"
        className="bg-white text-black"
        onChange={(e) => setText(e.target.value)}
        disabled={text.length > 50}
      />
      <button
        className="bg-red-500 px-2.5 py-1 text-white rounded active:scale-95 cursor-pointer"
        onClick={rstBtn}
      >
        RESET
      </button>
    </div>
  );
};

export default App;
