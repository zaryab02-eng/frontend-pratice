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

async function usersInfo() {
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users",
    );
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    );
    if (!userResponse.ok) {
      throw new Error("Failed to fetch users");
    }
    if (!postResponse.ok) {
      throw new Error("Failed to fetch posts");
    }
    const users = await userResponse.json();
    const posts = await postResponse.json();
    if (users.length === 0 || posts.length === 0) {
      throw new Error("No data found!");
    }
    const filteredUsers = users.filter(({ id }) => {
      const matchedPosts = posts.filter(({ userId }) => id === userId);
      return matchedPosts.length > 0;
    });

    const result = filteredUsers.map(({ id, name }) => {
      const matchedPosts = posts.filter(({ userId }) => id === userId);
      const totalBodyLength = matchedPosts.reduce(
        (current, { body }) => current + body.length,
        0,
      );
      const avgbodyLength = Number(
        (totalBodyLength / matchedPosts.length).toFixed(1),
      );
      return {
        name,
        avgbodyLength,
      };
    });
    result.sort((a, b) => b.avgbodyLength - a.avgbodyLength);
    console.log(`${result[0].name} - ${result[0].avgbodyLength}`);
  } catch (error) {
    console.log(error);
  }
}

usersInfo();
