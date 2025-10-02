import { useState } from "react";

const App = () => {
  const [num, setNum] = useState([]);
  const [nextNum, setNextNum] = useState(1);

  const addNum = () => {
    setNum([...num, nextNum]);
    setNextNum(nextNum + 1);
  };

  const deleteItem = (indexToDelete) => {
    const newNum = num.filter((_, idx) => idx !== indexToDelete);
    setNum(newNum);
  };

  return (
    <>
      <div className="bg-white p-2 text-black h-32 border border-red-600 overflow-y-auto">
        {num.map((nums, idx) => (
          <div key={idx} className="flex gap-2 items-center">
            <p>{nums}</p>
            <button
              onClick={() => deleteItem(idx)}
              className="p-1 bg-red-400 rounded text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        className="p-1 bg-amber-300 rounded text-black mt-2"
        onClick={addNum}
      >
        Add Next Number
      </button>
    </>
  );
};

export default App;
