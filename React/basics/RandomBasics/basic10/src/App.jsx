const App = () => {
  const colors = ["black", "White", "Green"];
  return (
    <>
      {colors.map((color, index) => (
        <p key={index}>{color}</p>
      ))}
    </>
  );
};

export default App;
