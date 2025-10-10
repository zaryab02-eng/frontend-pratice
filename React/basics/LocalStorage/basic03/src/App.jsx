import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState([]);
  const [inputColor, setInputColor] = useState("");
  const [displayColor, setDiplayColor] = useState([]);

  const addColor = () => {
    const newColor = [...colors, inputColor];
    setColors(newColor);
    localStorage.setItem("colorList", JSON.stringify(newColor));
    setInputColor("");
  };

  const loadColor = () => {
    const savedColor = localStorage.getItem("colorList");
    if (savedColor) {
      setDiplayColor(JSON.parse(savedColor));
    }
  };

  return (
    <>
      <div className="space-x-1">
        <input
          type="text"
          value={inputColor}
          onChange={(e) => setInputColor(e.target.value)}
          placeholder="Enter Color"
          className="bg-white text-black rounded px-2.5 py-1"
        />
        <button onClick={addColor} className="bg-blue-700 px-2.5 py-1 rounded">
          Add
        </button>
        <button
          onClick={loadColor}
          className="bg-green-700 px-2.5 py-1 rounded"
        >
          Load
        </button>
        <ul className="text-white space-y-2">
          {displayColor.map((disColor, index) => (
            <li
              style={{ backgroundColor: disColor }}
              className="h-32 w-32 border border-white mt-4"
              key={index}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
