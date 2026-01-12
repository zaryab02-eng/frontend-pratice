const App = () => {
  return (
    <div className="space-y-1">
      <div className="space-x-1">
        <input
          type="text"
          placeholder="enter here"
          className="bg-white placeholder:text-black text-black"
        />
        <button className="bg-red-500 text-white">Add</button>
      </div>
      <ul className="w-59.5 h-44 bg-blue-300"></ul>
    </div>
  );
};

export default App;
