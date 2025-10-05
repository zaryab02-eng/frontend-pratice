import { useState } from "react";

const App = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
  const [editIndex, setEditIndex] = useState(null); // WHICH fruit (0, 1, or 2)
  const [editValue, setEditValue] = useState("");

  const startEdit = (index) => {
    setEditIndex(index); // Remember which one
    setEditValue(fruits[index]); // Put current fruit in input
  };

  const saveEdit = () => {
    const newFruits = fruits.map((fruit, index) => {
      if (index === editIndex) {
        return editValue; // Replace this one
      }
      return fruit; // Keep others same
    });
    setFruits(newFruits);
    setEditIndex(null);
  };

  return (
    <div className="p-4">
      {fruits.map((fruit, index) => (
        <div key={index} className="mb-2">
          {editIndex === index ? (
            // THIS fruit is being edited
            <>
              <input
                className="bg-white px-2 py-1 text-black border"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button
                className="bg-green-600 text-white px-2 py-1 ml-2"
                onClick={saveEdit}
              >
                Save
              </button>
              <button
                className="bg-gray-600 text-white px-2 py-1 ml-2"
                onClick={() => setEditIndex(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            // THIS fruit is NOT being edited
            <>
              <span className="text-white">{fruit}</span>
              <button
                className="bg-blue-600 text-white px-2 py-1 ml-2"
                onClick={() => startEdit(index)}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
