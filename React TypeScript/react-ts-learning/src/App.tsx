// function Welcome({ name }: { name: string }) {
//   return <h1>Hello {name}!</h1>;
// }

// const App = () => {
//   return <Welcome name="Zaryab" />;
// };

// export default App;

function Product({ name, price }: { name: string; price: number }) {
  return (
    <>
      <h4>{name}</h4>
      <h1>{price}</h1>
    </>
  );
}

const App = () => {
  return <Product name="Laptop" price={50000} />;
};

export default App;
