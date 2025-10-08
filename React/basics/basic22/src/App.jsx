import { useState } from "react";

const App = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <div>
        {showInput ? (
          <input
            type="text"
            className="bg-white text-black px-2.5 gap-y-2 rounded"
          />
        ) : (
          <p className="text-white text-2xl font-bold">Hello!</p>
        )}
        <button
          className="bg-blue-600 text-black font-bold rounded border border-white px-3 py-2 hover:bg-blue-500 hover:cursor-pointer"
          onClick={() => setShowInput(!showInput)}
        >
          Toggle!
        </button>
      </div>
    </>
  );
};

export default App;
