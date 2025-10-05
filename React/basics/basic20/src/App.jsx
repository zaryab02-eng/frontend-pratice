import { useState } from "react";

const App = () => {
  // Initial fruits
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
  // Track which fruit (by index) is currently being edited
  const [editIndex, setEditIndex] = useState(null);
  // Store the temporary value while editing
  const [editedFruit, setEditedFruit] = useState("");

  return (
    <div className="p-4 space-y-3">
      {/* Map through fruits */}
      {fruits.map((fruit, idx) => (
        <div key={idx} className="flex items-center gap-3">
          {editIndex === idx ? (
            // ✅ If this fruit is being edited
            <>
              <input
                type="text"
                value={editedFruit}
                onChange={(e) => setEditedFruit(e.target.value)}
                className="border px-2 py-1 rounded text-black"
              />

              {/* ✅ Save button — updates the fruit at that index */}
              <button
                className="bg-green-600 text-white px-2 py-1 rounded"
                onClick={() => {
                  const updatedFruits = [...fruits];
                  updatedFruits[idx] = editedFruit;
                  setFruits(updatedFruits);
                  setEditIndex(null); // Exit edit mode
                }}
              >
                Save
              </button>

              {/* ✅ Cancel button — discards changes */}
              <button
                className="bg-gray-500 text-white px-2 py-1 rounded"
                onClick={() => setEditIndex(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            // ✅ Normal display mode
            <>
              <p className="text-lg">{fruit}</p>

              {/* ✅ Edit button — enables editing mode for this specific fruit */}
              <button
                className="bg-blue-600 text-white px-2 py-1 rounded"
                onClick={() => {
                  setEditIndex(idx);
                  setEditedFruit(fruit);
                }}
              >
                Edit
              </button>

              {/* ✅ Delete button — removes only this fruit */}
              <button
                className="bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => setFruits(fruits.filter((_, i) => i !== idx))}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
