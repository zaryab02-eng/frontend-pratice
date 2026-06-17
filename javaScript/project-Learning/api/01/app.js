// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const { name, website } = data.find(
//       ({ email }) => email === "Sincere@april.biz",
//     );
//     console.log({ name, website });
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const fiteresUsers = data
//       .filter(({ address: { city } }) => city.includes("South"))
//       .map(({ name }) => name);
//     console.log(fiteresUsers);

//     // Get all users living in a city
//     // that contains the word "South"
//     //
//     // Print only their names
//   });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const userComanyNameGroup = data.filter(({ company: { name } }) =>
      name.includes("Group"),
    );
    console.log(userComanyNameGroup.length);
  });
