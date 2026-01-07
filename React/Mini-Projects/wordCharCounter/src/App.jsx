import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const countWords = () => {
    {
      return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    }
  };

  return (
    <div>
      <h3>{`Character Count: ${text.length}`}</h3>
      <h4>{`Words Count: ${countWords()}`}</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-white text-black px-1 py-1"
        placeholder="Enter here"
      />
    </div>
  );
};

export default App;
