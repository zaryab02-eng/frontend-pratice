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

  return (
    <div>
      {students.map((student, index) => (
        <div key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditIndex(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p>{student}</p>
              <button onClick={() => startEdit(index)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
