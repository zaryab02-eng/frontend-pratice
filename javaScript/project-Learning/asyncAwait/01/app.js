// async function userInfo() {
//   try {
//     const responseNames = await fetch(
//       "https://jsonplaceholder.typicode.com/users",
//     );
//     const responsePosts = await fetch(
//       "https://jsonplaceholder.typicode.com/posts",
//     );

//     if (!responseNames.ok) {
//       throw new Error("Failed to fetch user names");
//     }

//     if (!responsePosts.ok) {
//       throw new Error("Failed to fetch posts");
//     }

//     const users = await responseNames.json();
//     const posts = await responsePosts.json();

//     const result = users.map(({ id, username }) => {
//       const firstBody = posts.find(({ userId }) => id === userId);
//       const { body = null } = firstBody ?? {};
//       return {
//         userName: username,
//         firstPostBody: body,
//       };
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// userInfo();

async function userInfo() {
  try {
    const responseName = await fetch(
      "https://jsonplaceholder.typicode.com/users",
    );
    const responsePost = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    );

    if (!responseName.ok) {
      throw new Error("Failed to fetch user names");
    }
    if (!responsePost.ok) {
      throw new Error("Failed to fetch user posts");
    }
    const users = await responseName.json();
    const posts = await responsePost.json();

    const result = users.map(({ id, username }) => {
      const userPosts = posts.filter(({ userId }) => id === userId);
      const lastPost = userPosts[userPosts.length - 1];
      const { body = null } = lastPost ?? {};
      return {
        userName: username,
        latestPostBody: body,
      };
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

userInfo();
