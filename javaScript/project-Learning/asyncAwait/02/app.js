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
//       const matchedPosts = posts.filter(({ userId }) => id === userId);
//       let shortestPostBody = null;
//       for (const { body } of matchedPosts) {
//         if (shortestPostBody === null) {
//           shortestPostBody = body;
//         } else if (body.length < shortestPostBody.length) {
//           shortestPostBody = body;
//         }
//       }
//       return {
//         name,
//         shortestPostBody: shortestPostBody.length,
//       };
//     });
//     result.sort((a, b) => a.shortestPostBody - b.shortestPostBody);
//     console.log(`${result[0].name} - ${result[0].shortestPostBody}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// usersInfo();

function runningMaximum(num) {
  let result = [];
  let largest = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
    result.push(largest);
  }
  return result;
}

console.log(runningMaximum([3, 8, 2, 10, 5]));
