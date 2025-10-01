import { useState } from "react";

const App = () => {
  const [num, setNum] = useState([]);
  const [nextNum, setNextNum] = useState(1);

  const addNum = () => {
    setNum([...num, nextNum]);
    setNextNum(nextNum + 1);
  };

  return (
    <>
      <div className="bg-white p-2 text-black h-32 border border-red-600 overflow-y-auto">
        {num.map((nums, idx) => (
          <p key={idx}>{nums}</p>
        ))}
      </div>

      <button className="p-1 bg-amber-300 rounded text-black" onClick={addNum}>
        Add Next Number
      </button>
    </>
  );
};

export default App;
