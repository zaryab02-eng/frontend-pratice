import Card from "./assets/components/Card";

const App = () => {
  const arr = [10, 20, 30, 40];
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {arr.map(function (elem) {
        return <Card />;
      })}
    </div>
  );
};

export default App;
