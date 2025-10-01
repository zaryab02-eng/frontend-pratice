import { useState } from "react";

const App = () => {
  const [item, setItem] = useState(["JavaScript"]);
  const [input, setInput] = useState("");

  const addItem = () => {
    setItem([...item, input]);
    setInput("");
  };

  // DELETE FUNCTION - This removes an item from the list
  const deleteItem = (indexToDelete) => {
    // filter goes through EACH item in the array
    // It keeps items where the condition is TRUE
    // It removes items where the condition is FALSE
    const newItems = item.filter((singleItem, index) => {
      return index !== indexToDelete;
      // This means: "Keep this item ONLY if its index is NOT the one we want to delete"
    });
    setItem(newItems);
  };

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div>
          <input
            className="bg-white border border-red-400 text-black px-2 py-1.5"
            placeholder="Enter Item here"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-600 px-2.5 py-1.5 border rounded hover:cursor-pointer hover:bg-blue-400"
            onClick={addItem}
          >
            Add Item!
          </button>
        </div>
        <div>
          {item.map((items, index) => (
            <div
              className="flex justify-between bg-amber-50 p-2 mb-1"
              key={index}
            >
              <p className="text-black font-bold">{items}</p>
              {/* When you click this button, it calls deleteItem with THIS item's index */}
              <button
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-400"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
