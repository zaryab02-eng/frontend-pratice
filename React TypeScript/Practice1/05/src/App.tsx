import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const inc = () => {
    setNum(num + 1);
  };

  const dec = () => {
    setNum(num - 1);
  };

  let display;
  if (num < 0) {
    display = `${num} is a negtaive number`;
  } else if (num === 0) {
    display = `${num} is zero`;
  } else if (num % num === 0)
    return (
      <div>
        <div>{display}</div>
        <div className="space-x-2">
          <button onClick={inc}>Increase</button>
          <button onClick={dec}>Decrease</button>
        </div>
      </div>
    );
};

export default App;
