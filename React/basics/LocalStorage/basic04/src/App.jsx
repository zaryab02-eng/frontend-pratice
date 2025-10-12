import { useState } from "react";

const App = () => {
  const [students, setStudents] = useState([]);
  const [displayStudent, setDisplayStudent] = useState([]);

  const [myName, setMyName] = useState("");
  const [myAge, setMyAge] = useState("");
  const [myCity, setMyCity] = useState("");

  const addStudents = () => {
    const student = {
      name: myName,
      age: myAge,
      city: myCity,
    };
    const newStudents = [...students, student];
    setStudents(newStudents);
    localStorage.setItem("studentsList", JSON.stringify(newStudents));
    setMyAge("");
    setMyName("");
    setMyCity("");
  };

  const loadStudents = () => {
    const saved = localStorage.getItem("studentsList");
    if (saved) {
      const loadedStudents = JSON.parse(saved);
      setStudents(loadedStudents); // 🔥 Add this line
      setDisplayStudent(loadedStudents);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-y-1">
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            value={myName}
            onChange={(e) => setMyName(e.target.value)}
            placeholder="Enter your name"
            className="bg-white text-black px-2 py-1 rounded outline-none"
          />
          <input
            type="text"
            value={myAge}
            onChange={(e) => setMyAge(e.target.value)}
            placeholder="Enter your age"
            className="bg-white text-black px-2 py-1 rounded outline-none"
          />
          <input
            type="text"
            value={myCity}
            onChange={(e) => setMyCity(e.target.value)}
            placeholder="Enter your city"
            className="bg-white text-black px-2 py-1 rounded outline-none"
          />
        </div>
        <div className="space-x-1">
          <button
            onClick={addStudents}
            className="bg-blue-700 text-white px-2.5 py-1.5 rounded hover:bg-blue-600 cursor-pointer"
          >
            Add Student
          </button>
          <button
            onClick={loadStudents}
            className="bg-green-700 text-white px-2.5 py-1.5 rounded hover:bg-green-600 cursor-pointer"
          >
            Load Student
          </button>
        </div>
        <ul className="bg-white p-2 text-black divide-y divide-gray-300 h-[230px] overflow-y-auto">
          {displayStudent.map((display, index) => (
            <li key={index} className=" bg-gray-100 rounded">
              <div>Name: {display.name}</div>
              <div>Age: {display.age}</div>
              <div>City: {display.city}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
