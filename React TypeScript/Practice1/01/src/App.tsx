import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const incre = () => {
    setNum((prev) => {
      if (prev === 10) return prev;
      return (prev = 1);
    });
  };

  const decre = () => {
    setNum((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };

  return (
    <div className="bg-black text-white h-screen flex justify-center items-center ">
      <div className="h-1/3 w-1/4 border border-white px-9 pt-8">
        <div className="w-full h-max border border-amber-50 flex justify-center mt-3 py-1.5">
          <h3>Display</h3>
          <h2>{num}</h2>
        </div>
        <div className="w-full h-max flex justify-center mt-3 py-1.5 gap-x-3">
          <button
            className="px-6 rounded-2xl bg-red-500 text-2xl hover:bg-red-700 cursor-pointer active:scale-95"
            onClick={decre}
          >
            -
          </button>
          <button
            className="px-6 rounded-2xl bg-green-500 text-2xl hover:bg-green-700 cursor-pointer active:scale-95"
            onClick={incre}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
