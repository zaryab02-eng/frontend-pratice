import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="h-72 w-52 border border-white flex flex-col justify-center items-center px-28 space-y-3">
        <h4 id="display" style={{ color: text.length > 20 ? "red" : "white" }}>
          {text.length > 20
            ? `Limit Reached ${text.length}`
            : `Character Length: ${text.length}`}
        </h4>
        <input
          type="text"
          placeholder="Enter text here"
          className="bg-amber-100 text-black"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
