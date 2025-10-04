import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Zaryab");
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("Zaryab");

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button
            onClick={() => {
              setName(newName);
              setIsEditing(false);
            }}
            className="bg-green-600 px-3 py-2 ml-2"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h1>{name}</h1>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default App;
