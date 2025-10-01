import { useState } from "react";

const App = () => {
  const [items, setItem] = useState(["JavaScript", "Html"]);
  const addItem = () => setItem([...items, "TailwindCss"]);

  return (
    <>
      {items.map((item, index) => (
        <p className="text-white" key={index}>
          {item}
        </p>
      ))}
      <button
        className="p-2 bg-blue-300 text-black font-bold rounded"
        onClick={addItem}
      >
        Add TailwindCss
      </button>
    </>
  );
};

export default App;
