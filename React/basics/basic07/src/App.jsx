import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(15);
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="px-2.5 py-1.5 bg-blue-600 border border-white">
          Age: {age}
        </p>
        <button
          className="px-2.5 py-1.5 rounded bg-green-600 hover:bg-green-400 hover:cursor-pointer"
          onClick={() => setAge(age + 1)}
        >
          Increase
        </button>
      </div>
      {age < 18 && <p className="text-red-500 font-bold">You are a minor👶</p>}
      {age >= 18 && (
        <p className="text-green-500 font-bold">You are an adult🎓</p>
      )}
    </>
  );
};

export default App;
