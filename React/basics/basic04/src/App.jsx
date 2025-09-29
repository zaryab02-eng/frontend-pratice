import { useState } from "react";

const Coutner = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </>
  );
};

export default Coutner;
