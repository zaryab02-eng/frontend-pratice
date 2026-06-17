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

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const userComanyNameGroup = data.filter(({ company: { name } }) =>
//       name.includes("Group"),
//     );
//     console.log(userComanyNameGroup.length);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const {
//       name,
//       company: { name: companyName },
//       address: { city },
//     } = data.find(({ id }) => id === 5);
//     console.log({ name, companyName, city });

//     // Find the user whose id is 5
//     //
//     // Print:
//     // {
//     //   name,
//     //   companyName,
//     //   city
//     // }
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const newArr = data.map(({ name, address: { city } }) => {
//       return (name, city);
//     });
//     console.log(newArr);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const newArr = data.map(({ name, email, address: { city } }) => {
//       return { name, email, city };
//     });
//     console.log(newArr);
//   });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const newArr = data
      .filter(({ id }) => id > 5)
      .map(({ name, company: { name: companyName } }) => {
        return { name, companyName };
      });
    console.log(newArr);
  });
