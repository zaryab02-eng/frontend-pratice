import { useState } from "react";

const App = () => {
  const [names] = useState(["Arshad", "Sabiha", "Zaryab", "Altamash"]);
  return (
    <div className="bg-blue-100 p-6">
      {names.map((name, index) => (
        <p
          className="text-black flex justify-between items-center h-12 w-32 "
          key={index}
        >
          {name}
          <button
            className="bg-blue-600 cursor-pointer hover:bg-blue-500 px-3 py-2 rounded"
            onClick={() => console.log(index)}
          >
            Edit
          </button>
        </p>
      ))}
    </div>
  );
};

export default App;
