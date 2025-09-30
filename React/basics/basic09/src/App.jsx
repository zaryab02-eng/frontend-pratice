import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  return (
    <>
      <input
        className="px-2.5 py-1 bg-amber-200 border border-white text-black rounded"
        placeholder="Enter Your Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="px-2.5 py-1 bg-amber-200 border border-white text-black rounded"
        placeholder="Enter Your Age"
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        className="px-2.5 py-1 bg-amber-200 border border-white text-black rounded"
        placeholder="Enter Your City"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {name && age && city && (
        <h1 className="text-green-400 font-bold">
          Hello, My name is {name}, im {age} years old from {city}
        </h1>
      )}
    </>
  );
};

export default App;
