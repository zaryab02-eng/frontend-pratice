import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const inc = () => {
    setNum(num + 1);
  };

  const dec = () => {
    setNum(num - 1);
  };

  let display;
  if (num < 0) {
    display = `${num} is a negtaive number`;
  } else if (num === 0) {
    display = `${num} is zero`;
  } else if (num % 3 === 0 && num % 5 === 0) {
    display = `${num} is a FizzBuzz`;
  } else if (num % 3 === 0) {
    display = `${num} is a Fizz`;
  } else if (num % 5 === 0) {
    display = `${num} is a Buzz`;
  } else {
    display = num;
  }

  return (
    <div>
      <div>{display}</div>
      <div className="space-x-2">
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>
      </div>
    </div>
  );
};

export default App;
