import { useState } from "react";

const App = () => {
  const [students, setStudents] = useState([]);
  const [newStudents, setNewStudents] = useState();

  const addStudent = () => {
    if (newStudents.trim() === "") return;
    setStudents([...students, newStudents]);
    setNewStudents("");
  };

  const deleteBtn = (indexToDelete) => {
    const dltStudent = students.filter((student, idx) => {
      return indexToDelete !== idx;
    });
    setStudents(dltStudent);
  };

  return (
    <>
      <div className="bg-white p-3 flex flex-col gap-x-0.5">
        <p className="text-black">Total Students: {students.length}</p>
        <div>
          <input
            value={newStudents}
            onChange={(e) => setNewStudents(e.target.value)}
            className="text-black font-bold px-1.5 py-1 rounded border border-black"
            type="text"
            placeholder="Enter Studend Name!"
          />
          <button
            onClick={addStudent}
            className="bg-blue-600 px-3 py-1.5 font-semibold border rounded hover:bg-blue-500 hover:cursor-pointer"
          >
            Add
          </button>
        </div>

        <ul className="p-0.5 mt-1 bg-white text-black flex flex-col  gap-y-1 h-40 overflow-auto">
          {students.map((student, idx) => (
            <li key={idx} className="flex items-center justify-between">
              {student}
              <button
                className="bg-red-700 px-2.5 py-1.5 rounded hover:bg-red-400 hover:cursor-pointer"
                onClick={() => deleteBtn(idx)}
              >
                Delete!
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
