import { TiTick } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("todoList");
    const savedCompleted = localStorage.getItem("completedList");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    if (savedCompleted) {
      setCompletedTasks(JSON.parse(savedCompleted));
    }
  }, []);

  const saveEditTask = () => {
    if (newTask.trim() === "") return;
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("todoList", JSON.stringify(updated));
    setNewTask("");
  };

  const dltTask = (taskToDelete) => {
    const newTasks = tasks.filter((task, index) => index !== taskToDelete);
    setTasks(newTasks);
    localStorage.setItem("todoList", JSON.stringify(newTasks));
  };

  const saveEdit = () => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === editIndex) {
        return editValue;
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("todoList", JSON.stringify(updatedTasks));
    setEditIndex(null);
  };

  const toggleComplete = (index) => {
    let updated;
    if (completedTasks.includes(index)) {
      updated = completedTasks.filter((i) => i !== index);
    } else {
      updated = [...completedTasks, index];
    }
    setCompletedTasks(updated);
    localStorage.setItem("completedList", JSON.stringify(updated)); // 🔥 Add
  };
  return (
    <>
      <div className="bg-[#fefefe] h-[19rem] w-[21rem] shadow-[0_10px_30px_rgba(0,0,0,0.3)] border rounded-2xl">
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
            className="text-white bg-blue-600 hover:bg-blue-500 cursor-pointer px-4.5 py-1 rounded-full text-[12px] font-bold"
          >
            Add
          </button>
        </div>
        <div className="px-3 py-1.5 h-[10rem] overflow-y-scroll hide-scrollbar mt-1.5">
          {tasks.map((task, index) => (
            <ul key={index} className="py-1.5">
              <li className="flex items-center justify-between bg-[#f9fafb] border rounded-lg px-2 py-1">
                {editIndex === index ? (
                  // EDIT MODE
                  <>
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="border px-1 py-0.5 text-black text-sm rounded flex-1"
                    />
                    <div className="flex space-x-1 ml-2">
                      <button
                        onClick={saveEdit}
                        className="bg-green-600 hover:bg-green-500 cursor-pointer text-white px-2 py-0.5 text-xs rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="bg-gray-600 hover:bg-gray-500 cursor-pointer text-white px-2 py-0.5 text-xs rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  // NORMAL MODE
                  <>
                    <div className="flex items-center space-x-2">
                      <button
                        className="cursor-pointer"
                        onClick={() => toggleComplete(index)}
                      >
                        {completedTasks.includes(index) ? (
                          <FaCheckCircle className="text-green-600 text-sm" />
                        ) : (
                          <FaRegCircle className="text-gray-600 text-sm" />
                        )}
                      </button>
                      <span
                        className={`text-black text-sm ${
                          completedTasks.includes(index)
                            ? "line-through text-gray-400"
                            : ""
                        }`}
                      >
                        {task}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        className="text-black cursor-pointer hover:text-blue-600"
                        onClick={() => {
                          setEditIndex(index);
                          setEditValue(task);
                        }}
                      >
                        <MdEdit />
                      </button>
                      <button
                        className="text-black cursor-pointer hover:text-red-500"
                        onClick={() => dltTask(index)}
                      >
                        <RiDeleteBin4Line />
                      </button>
                    </div>
                  </>
                )}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
