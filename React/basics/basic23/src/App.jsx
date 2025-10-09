import { useState } from "react";

const App = () => {
  const [names, setNames] = useState([
    "Arshad",
    "Sabiha",
    "Zaryab",
    "Altamash",
  ]);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const saveEdit = () => {
    const newNames = names.map((name, index) => {
      if (index === clickedIndex) {
        return editValue; // Isko badal do
      }
      return name; // Baaki same
    });
    setNames(newNames);
    setClickedIndex(null);
  };

  return (
    <>
      {names.map((name, index) => (
        <div
          className="flex bg-amber-200 w-[12srem] h-[4rem] p-3 justify-between"
          key={index}
        >
          {clickedIndex === index ? (
            <>
              <input
                className="bg-white text-black px-2 py-1"
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button className="bg-blue-600 px-2 py-1" onClick={saveEdit}>
                Save
              </button>
            </>
          ) : (
            <p className="bg-white text-black px-2 py-1">{name}</p>
          )}
          <button
            className="bg-red-600 px-2 py-1"
            onClick={() => {
              setClickedIndex(index);
              setEditValue(name);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
};

export default App;
