import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState([]);
  const [nextNum, setNextNum] = useState(1);

  const addNum = () => {
    setNum([...num, nextNum]);
    setNextNum(nextNum + 1);
  };

  const deleteButton = (indexToDelete) => {
    const newNum = num.filter((singleNum, idx) => {
      return idx !== indexToDelete;
    });
    setNum(newNum);
  };

  return (
    <>
      <ul className="bg-white text-black p-5">
        {num.map((nums, idx) => (
          <li key={idx}>
            {nums}
            <button
              onClick={() => deleteButton(idx)}
              className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-400"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-700 text-black text-2xl rounded"
        onClick={addNum}
      >
        Add Num
      </button>
    </>
  );
};

export default App;
