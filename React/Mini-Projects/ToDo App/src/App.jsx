import { TiTick } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { useState } from "react";
import { RiDeleteBin4Line } from "react-icons/ri";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const saveEditTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const dltTask = (taskToDelete) => {
    const newTasks = tasks.filter((task, index) => {
      taskToDelete !== index;
    });
    return setNewTask(newTasks);
  };

  return (
    <>
      <div className="bg-[#fefefe] h-[19rem] w-[19rem] shadow-[0_10px_30px_rgba(0,0,0,0.3)] border rounded-2xl">
        <div className="flex justify-between p-3">
          <div className="flex items-center space-x-2">
            <div className="flex w-max h-max rounded-full p-[0.5px] border border-green-600">
              <TiTick className="text-green-500 text-[13px]" />
            </div>
            <h1 className="text-black text-2xl font-bold">Todo</h1>
          </div>
          <div className="flex justify-center items-center">
            <FaRegUserCircle className="text-black text-[18px]" />
          </div>
        </div>
        <div className="flex justify-around px-2">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-[#bfc1c4] w-[73%] outline-none px-1.5 py-0.5 text-black text-[12px] rounded-[7px] placeholder:text-[#969a9f]"
            type="text"
            placeholder="Add a new todo..."
          />
          <button
            onClick={saveEditTask}
            className="text-white bg-blue-600 px-4.5 py-1 rounded-full text-[12px] font-bold"
          >
            Add
          </button>
        </div>
        <div className="px-3 py-1.5 h-[10rem] overflow-y-scroll hide-scrollbar mt-1.5">
          {tasks.map((task, index) => (
            <ul key={index} className="py-1.5">
              <li className="flex items-center justify-between bg-[#f9fafb] border rounded-lg px-2 py-1">
                {/* Left side - circle and task */}
                <div className="flex items-center space-x-2">
                  <FaRegCircle className="text-gray-600 text-sm" />
                  <span className="text-black text-sm">{task}</span>
                </div>

                {/* Right side - delete button */}
                <button className="text-black" onClick={dltTask}>
                  <RiDeleteBin4Line />
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
