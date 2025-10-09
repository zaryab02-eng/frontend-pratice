import { useState } from "react";

const App = () => {
  const [ages, setAges] = useState([18, 22, 15, 30, 12]);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [editAge, setEditAge] = useState("");

  const saveEdit = () => {
    const newAges = ages.map((age, index) => {
      if (clickedIndex === index) {
        return editAge;
      }
      return age;
    });
    setAges(newAges);
    setClickedIndex(null);
  };

  return (
    <>
      {ages.map((age, index) => (
        <div
          key={index}
          className="bg-amber-600 w-[10rem] h-[3rem] flex p-5 justify-between items-center"
        >
          {clickedIndex === index ? (
            <>
              <input
                className="bg-white text-black w-[3.5rem] px-2 py-1 outline-none"
                type="text"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
              />
              <button
                className="bg-blue-600 text-white font-bold px-2.5 py-1.5 rounded"
                onClick={saveEdit}
              >
                Save
              </button>
              <button
                className="bg-red-600 text-white font-bold px-2.5 py-1.5 rounded"
                onClick={() => setClickedIndex(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p className="bg-black px-2 py-1 text-white">{age}</p>
              <button
                className="bg-green-600 text-white font-bold px-2.5 py-1.5 rounded"
                onClick={() => {
                  setClickedIndex(index);
                  setEditAge(age);
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default App;
