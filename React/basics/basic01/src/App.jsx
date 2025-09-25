import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);

  return (
    <div>
      <div>
        <h1>The counter is {a}</h1>
        <div className="flex gap-2">
          <button
            className="bg-green-400 p-2 border-0 border-white rounded"
            onClick={() => setA(a + 1)}
          >
            Increase
          </button>
          <button
            className="bg-red-400 p-2 border-0 border-white rounded"
            onClick={() => setA(a - 1)}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
