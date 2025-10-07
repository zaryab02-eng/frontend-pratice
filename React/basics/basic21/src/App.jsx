import { useState } from "react";

const App = () => {
  const [students, setStudents] = useState(["Ali", "Sara", "Ahmed"]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(students[index]);
  };

  const saveEdit = () => {
    const newStudents = students.map((student, index) => {
      if (index === editIndex) {
        return editValue;
      }
      return student;
    });
    setStudents(newStudents);
    setEditIndex(null);
  };

  return <div>App</div>;
};

export default App;
