const Welcome = () => {
  return <h1 className="text-lg font-bold">Welcome!</h1>;
};

const Zaryab = () => {
  const myName = "Zaryab";
  const myAge = 22;
  const myCity = "Gorakhpur";
  return (
    <div className="text-lg p-8 bg-blue-100 rounded">
      <Welcome />
      <p>
        Hi, I'm {myName}, I'm {myAge} years old, and I live in {myCity}!
      </p>
    </div>
  );
};

export default Zaryab;
