// async function usersInfo() {
//   try {
//     const userResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users",
//     );
//     const postResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/posts",
//     );
//     if (!userResponse.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     if (!postResponse.ok) {
//       throw new Error("Failed to fetch posts");
//     }
//     const users = await userResponse.json();
//     const posts = await postResponse.json();
//     if (users.length === 0 || posts.length === 0) {
//       throw new Error("No data found!");
//     }
//     const result = users.map(({ id, name }) => {
//       const matchedPost = posts.filter(({ userId }) => id === userId);
//       let count = 0;
//       for (const { body } of matchedPost) {
//         if (body.includes("et")) {
//           count++;
//         }
//       }
//       return {
//         name,
//         count,
//       };
//     });
//     result.sort((a, b) => b.count - a.count);
//     console.log(`${result[0].name} - ${result[0].count}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// usersInfo();

function runningAverage(num) {
  let sum = 0;
  let result = [];
  let avg = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
    avg = sum / (i + 1);
    result.push(avg);
  }
  return result;
}

console.log(runningAverage([2, 4, 6, 8]));
