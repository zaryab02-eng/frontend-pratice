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

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const newArr = data
//       .filter(({ id }) => id > 5)
//       .map(({ name, company: { name: companyName } }) => {
//         return { name, companyName };
//       });
//     console.log(newArr);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const {
//       name,
//       email,
//       address: { city },
//       company: { name: companyName },
//     } = data.find(({ id }) => id === 3);
//     console.log({ name, email, city, companyName });

//     // Find the user with id 3
//     //
//     // Create:
//     //
//     // {
//     //   name,
//     //   email,
//     //   city,
//     //   companyName
//     // }
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const newArr = data
//       .filter(({ address: { city } }) => city.includes("South"))
//       .map(({ name, address: { city } }) => {
//         return { name, city };
//       });
//     console.log(newArr);

//     // Create an array of objects:
//     //
//     // {
//     //   name,
//     //   city
//     // }
//     //
//     // Only for users whose city contains "South"
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const {
//       name,
//       email,
//       address: { city },
//     } = data.find(({ address: { city } }) => city.includes("South"));
//     console.log({ name, email, city });

//     // Find the first user whose city contains "South"
//     //
//     // Print:
//     //
//     // {
//     //   name,
//     //   email,
//     //   city
//     // }
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const userLivesInCityNameSouth = data.filter(({ address: { city } }) =>
//       city.includes("South"),
//     );
//     console.log(userLivesInCityNameSouth.length);

//     // Count how many users live in cities
//     // containing "South"
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const newArr = data
//       .filter(({ id }) => id > 5)
//       .map(({ name, address: { city }, company: { name: companyName } }) => {
//         return {
//           name,
//           city,
//           companyName,
//         };
//       });
//     console.log(newArr);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const CityUsers = data.reduce(
//       (current, { address: { city } }) => {
//         if (city.includes("South")) {
//           current.southCityUsers++;
//         }
//         return current;
//       },
//       {
//         totalUsers: data.length,
//         southCityUsers: 0,
//       },
//     );
//     console.log(CityUsers);
//   });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const userCount = data.reduce(
      (current, { id }) => {
        return {
          totalUsers: current.totalUsers + 1,
          idsGreaterThan5:
            id > 5 ? current.idsGreaterThan5 + 1 : current.idsGreaterThan5,
        };
      },
      {
        totalUsers: 0,
        idsGreaterThan5: 0,
      },
    );
    console.log(userCount);
  });
