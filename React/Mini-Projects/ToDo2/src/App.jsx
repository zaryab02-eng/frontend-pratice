const App = () => {
  return (
    <div>
      <div className="bg-gray-500 h-96 p-2">
        <div className="translate-y-6">
          <input
            type="text"
            placeholder="Enter your todo here"
            className="bg-white text-black py-1 px-2"
          />
          <button className="px-2.5 py-1 bg-red-500 rounded">Add</button>
        </div>

        <ul className="h-64 bg-red-500 translate-y-14 p-2">
          <li>hello</li>
          <li>hello</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
