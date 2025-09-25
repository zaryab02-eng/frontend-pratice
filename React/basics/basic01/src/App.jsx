import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(1);

  return (
    <div>
      <h1>The Counter is: {a}</h1>
      <button id="incre" onClick={() => setA(a + 1)}>
        Increment
      </button>
      <button id="decre" onClick={() => setA(a - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default App;
