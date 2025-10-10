import { useState } from "react";

const App = () => {
  const [ages, setAges] = useState([18, 22, 15, 30, 12, 25, 16]);

  const dltBtn = (indexToDelete) => {
    const dltAge = ages.filter((age, i) => {
      return indexToDelete !== i;
    });
    setAges(dltAge);
  };

  const adult = ages.filter((age) => age >= 18).length;
  const minor = ages.filter((age) => age < 18).length;

  return (
    <>
      <ul className="bg-white text-black p-3.5 w-34 h-max flex flex-col gap-y-1.5">
        <p className="text-red-600 font-sans">Total Ages:{ages.length}</p>
        <p className="text-red-600 font-sans">No of Adults:{adult}</p>
        <p className="text-red-600 font-sans">No of Minors:{minor}</p>
        <h1 className="bg-white text-black font-semibold">Ages:</h1>
        {ages.map((age, i) => (
          <li key={i} className="flex items-center justify-between">
            {age}
            <button
              className="bg-red-700 px-2.5 py-1.5 rounded hover:bg-red-400 hover:cursor-pointer"
              onClick={() => dltBtn(i)}
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
