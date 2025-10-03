import { useState } from "react";

const App = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange", "Mango"]);
  const deleteButton = (indexToDelete) => {
    const newFruit = fruits.filter((fruit, idx) => {
      return indexToDelete !== idx;
    });
    setFruits(newFruit);
  };

  return (
    <>
      <p className="text-white text-xl font-bold">
        Total Fruits:{fruits.length}
      </p>
      <ul className="p-3 bg-white text-black flex flex-col w-52 gap-y-1">
        {fruits.map((fruit, idx) => (
          <li key={idx} className="flex items-center justify-between">
            {fruit}
            <button
              className="bg-red-700 px-2.5 py-1.5 rounded hover:bg-red-400 hover:cursor-pointer"
              onClick={() => deleteButton(idx)}
            >
              Delete!
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
