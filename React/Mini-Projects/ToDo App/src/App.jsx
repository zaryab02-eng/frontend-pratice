import { TiTick } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className="bg-[#fefefe] h-[16rem] w-[19rem] shadow-[0_10px_30px_rgba(0,0,0,0.3)] border rounded-2xl">
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
      </div>
    </>
  );
};

export default App;
