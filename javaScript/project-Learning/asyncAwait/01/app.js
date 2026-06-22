// async function getPost() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error("Failed to fetch");
//     }
//     const data = await response.json();
//     const southUsers = data.filter(({ address: { city } }) =>
//       city.includes("South"),
//     );

//     console.log(southUsers);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getPost();

// async function userData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error("Failed to fetch");
//     }
//     const data = await response.json();
//     const names = data.map(({ name }) => name);

//     console.log(names);
//   } catch (error) {
//     console.log(error);
//   }
// }

// userData();

// async function userData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error("Failed to fetch");
//     }
//     const data = await response.json();
//     const userCount = data.reduce(
//       (current, { address: { city } }) => {
//         return {
//           totalUsers: current.totalUsers + 1,
//           southCityUsers: city.includes("South")
//             ? current.southCityUsers + 1
//             : current.southCityUsers,
//         };
//       },
//       {
//         totalUsers: 0,
//         southCityUsers: 0,
//       },
//     );
//     console.log(userCount);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Request Completed");
//   }
// }

// userData();

async function userData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    const {
      name,
      address: { city },
      company: { name: copmanyName },
    } = data.find(({ id }) => id === 7);
    console.log({ name, city, copmanyName });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Successful");
  }
}

userData();
