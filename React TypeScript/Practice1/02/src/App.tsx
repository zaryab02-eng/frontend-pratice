import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum((prev) => {
      if (prev >= 5) return prev;
      return prev + 1;
    });
  };

  const decrease = () => {
    setNum((prev) => {
      if (prev <= -3) return prev;
      return prev - 1;
    });
  };

  let display;
  if (num >= 5) {
    display = "High Number";
  } else if (num <= -3) {
    display = "Low Number";
  } else {
    display = num;
  }

  return (
    <div>
      <div className="flex m-2 gap-x-2">
        <button
          className="bg-white text-black px-2.5 py-0.5 rounded"
          onClick={increase}
        >
          +
        </button>
        <button
          className="bg-white text-black px-2.5 py-0.5 rounded"
          onClick={decrease}
        >
          -
        </button>
      </div>
      <div className="bg-white text-black w-max px-9 py-1.5">{display}</div>
    </div>
  );
};

export default App;
