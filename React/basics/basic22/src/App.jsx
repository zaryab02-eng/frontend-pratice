import { useState } from "react";

const App = () => {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("Hello");
  return (
    <>
      <div>
        {showInput ? (
          <>
            <div className="flex gap-1.5">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="bg-white text-black px-2.5 py-1.5 rounded"
              />
              <button
                className="bg-green-700 px-2.5 py-1.5 rounded hover:bg-green-600 hover:cursor-pointer"
                onClick={() => setShowInput(false)}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-1.5">
              <p className="bg-white text-black px-2.5 py-1.5 font-bold">
                {text}
              </p>
              <button
                className="bg-blue-700 px-2.5 py-1.5 rounded hover:bg-blue-600 hover:cursor-pointer"
                onClick={() => setShowInput(true)}
              >
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
