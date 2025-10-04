import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(22);
  const [isEditing, setIsEditing] = useState(false);
  const [newAge, setNewAge] = useState(22);

  return (
    <div className="bg-white text-black p-8">
      {isEditing ? (
        <>
          <input
            className="bg-white border border-black rounded text-black px-2 py-1.5"
            type="text"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
          />
          <button
            className="px-2 py-1 bg-green-600 rounded text-black hover:bg-green-500 hover:cursor-pointer"
            onClick={() => {
              setAge(newAge);
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button
            className="px-2 py-1 bg-red-600 rounded text-black hover:bg-red-500 hover:cursor-pointer"
            onClick={() => {
              setNewAge(age);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h1>{age}</h1>
          <button
            className="px-2 py-1 bg-red-600 rounded text-black hover:bg-red-500 hover:cursor-pointer"
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
