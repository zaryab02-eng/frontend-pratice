import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const inc = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };

  const dec = () => {
    setNum((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };

  let display;
  if (num % 2 == 0) {
    display = `${num} is even`;
  } else {
    display = `${num} is odd`;
  }

  return (
    <div>
      <div className="px-4 py-2 bg-white text-black w-max">{display}</div>
      <div className="flex gap-x-2 mt-1.5">
        <button
          className="px-2 py-0.5 bg-green-500 w-max rounded"
          onClick={inc}
        >
          INCREASE
        </button>
        <button className="px-2 py-0.5 bg-red-500 w-max rounded" onClick={dec}>
          DECREASE
        </button>
      </div>
    </div>
  );
};

export default App;
