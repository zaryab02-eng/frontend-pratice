import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(5);
  const [isEditing, setIsEditing] = useState(false);
  const [newNum, setNewNum] = useState(5);
  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="number"
            value={newNum}
            onChange={(e) => setNewNum(e.target.value)}
            className="bg-white text-black"
          />
          <button
            onClick={() => {
              setNum(newNum);
              setIsEditing(false);
            }}
            className="bg-green-600 px-3 py-2 ml-2"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p className="text-white text-2xl">Number: {num}</p>
          <button
            className="p-2 bg-green-400 text-black font-bold"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default App;
