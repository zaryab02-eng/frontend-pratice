const Person = ({ fullName, age, city }) => {
  return (
    <h1>
      Hi, I am {fullName}, {age} years old from {city}
    </h1>
  );
};

const App = () => {
  return <Person fullName="Zaryab" age="22" city="Gorakhpur" />;
};

export default App;
