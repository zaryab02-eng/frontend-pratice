// async function userInfo() {
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

//     const result = users.map(({ id, username }) => {
//       const matchedPosts = posts.filter(({ userId }) => id === userId);
//       const hasPosts = posts.some(({ userId }) => id === userId);
//       const latestPost = matchedPosts[matchedPosts.length - 1];
//       const { title = null } = latestPost ?? {};
//       return {
//         userName: username,
//         totalPosts: matchedPosts.length,
//         latestPostTitle: title,
//         hasPosts: hasPosts,
//       };
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// userInfo();

// async function userInfo() {
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

//     const result = users.map(({ id, username }) => {
//       const matchedPost = posts.filter(({ userId }) => id === userId);
//       let longestPostTitle = null;
//       for (const { title } of matchedPost) {
//         if (
//           longestPostTitle === null ||
//           title.length > longestPostTitle.length
//         ) {
//           longestPostTitle = title;
//         }
//       }
//       return {
//         userName: username,
//         longestPostTitle: longestPostTitle,
//       };
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// userInfo();

// async function userInfo() {
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

//     const result = users.map(({ id, username }) => {
//       const postCount = posts.filter(({ userId }) => id === userId);
//       const titles = postCount.map(({ title }) => title);
//       const totalChar = titles.reduce(
//         (total, title) => total + title.length,
//         0,
//       );
//       const averageTitleLength =
//         postCount.length === 0
//           ? 0
//           : Number((totalChar / postCount.length).toFixed(1));
//       return {
//         userName: username,
//         postCount: postCount.length,
//         averageTitleLength: averageTitleLength,
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

    const result = users.map(({ id, username }) => {
      const matchedPosts = posts.filter(({ userId }) => id === userId);
      const titles = matchedPosts.map(({ title }) => title);
      let longestTitle = null;
      for (const title of titles) {
        if (longestTitle === null || title.length > longestTitle.length) {
          longestTitle = title;
        }
      }
      const hasLongTitle = titles.some((title) => title.length > 50);
      const postCount = matchedPosts.length;
      const totalChar = titles.reduce(
        (total, title) => total + title.length,
        0,
      );
      const averageTitleLength =
        postCount === 0 ? 0 : Number((totalChar / postCount).toFixed(1));
      return {
        userName: username,
        longestPostTitle: longestTitle,
        averageTitleLength: averageTitleLength,
        hasLongTitle: hasLongTitle,
      };
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

userInfo();
