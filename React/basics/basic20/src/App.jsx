import { useState } from "react";

const App = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
  const [editIndex, seteditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const saveEdit = (index) => {
    seteditIndex(index);
    setEditValue(fruits[index]);
  };

  return <div>App</div>;
};

export default App;
