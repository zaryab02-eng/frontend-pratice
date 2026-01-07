import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>{`Character Count: ${text.length}`}</h3>
      <h4>{text}</h4>
      <input
        type="text"
        value={Text}
        onChange={(e) => setText(e.target.value)}
        className="bg-white"
      />
    </div>
  );
};

export default App;
