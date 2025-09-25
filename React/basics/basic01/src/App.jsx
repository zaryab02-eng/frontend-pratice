import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);

  return (
    <div>
      <div>
        <h1>The counter is {a}</h1>
        <div id="button">
          <button onClick={() => setA(a + 1)}>Increase</button>
          <button onClick={() => setA(a - 1)}>Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default App;
