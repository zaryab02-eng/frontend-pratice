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
//       const titles = matchedPosts.map(({ title }) => title);
//       let longestTitle = null;
//       for (const title of titles) {
//         if (longestTitle === null || title.length > longestTitle.length) {
//           longestTitle = title;
//         }
//       }
//       const hasLongTitle = titles.some((title) => title.length > 50);
//       const postCount = matchedPosts.length;
//       const totalChar = titles.reduce(
//         (total, title) => total + title.length,
//         0,
//       );
//       const averageTitleLength =
//         postCount === 0 ? 0 : Number((totalChar / postCount).toFixed(1));
//       return {
//         userName: username,
//         longestPostTitle: longestTitle,
//         averageTitleLength: averageTitleLength,
//         hasLongTitle: hasLongTitle,
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
//       const userPosts = posts.filter(({ userId }) => id === userId);
//       const titles = userPosts.map(({ title }) => title);
//       let shortestPostTitle = null;
//       for (const title of titles) {
//         if (
//           shortestPostTitle === null ||
//           title.length < shortestPostTitle.length
//         ) {
//           shortestPostTitle = title;
//         }
//       }
//       let longestPostTitle = null;
//       for (const title of titles) {
//         if (
//           longestPostTitle === null ||
//           title.length > longestPostTitle.length
//         ) {
//           longestPostTitle = title;
//         }
//       }

//       const totalChar = titles.reduce(
//         (current, title) => current + title.length,
//         0,
//       );

//       const averageTitleLength = Number(
//         titles.length === 0 ? 0 : (totalChar / titles.length).toFixed(1),
//       );
//       return {
//         userName: username,
//         shortestPostTitle: shortestPostTitle,
//         longestPostTitle: longestPostTitle,
//         averageTitleLength: averageTitleLength,
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
//       const userPosts = posts.filter(({ userId }) => id === userId);
//       const titles = userPosts.map(({ title }) => title);
//       let shortestPostTitle = null;
//       let longestPostTitle = null;
//       for (const title of titles) {
//         if (
//           shortestPostTitle === null ||
//           title.length < shortestPostTitle.length
//         ) {
//           shortestPostTitle = title;
//         }
//         if (
//           longestPostTitle === null ||
//           title.length > longestPostTitle.length
//         ) {
//           longestPostTitle = title;
//         }
//       }

//       const titleDifference =
//         titles.length === 0
//           ? 0
//           : longestPostTitle.length - shortestPostTitle.length;
//       return {
//         userName: username,
//         shortestPostTitle: shortestPostTitle,
//         longestPostTitle: longestPostTitle,
//         titleDifference: titleDifference,
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
//     const postsResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/posts",
//     );
//     if (!userResponse.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     if (!postsResponse.ok) {
//       throw new Error("Failed to fetch posts");
//     }
//     const users = await userResponse.json();
//     const posts = await postsResponse.json();

//     if (users.length === 0 || posts.length === 0) {
//       throw new Error("No data found");
//     }

//     const result = users.map(({ id, name }) => {
//       const matchedPosts = posts.filter(({ userId }) => id === userId);
//       let totalTitleLength = 0;
//       for (const title of matchedPosts) {
//         totalTitleLength += title.length;
//       }

//       return {
//         userName: name,
//         totalTitleLength: totalTitleLength,
//       };
//     });
//     result.sort((a, b) => b.totalTitleLength - a.totalTitleLength);
//     console.log(result[0].userName);
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
//     const postsResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/posts",
//     );
//     if (!userResponse.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     if (!postsResponse.ok) {
//       throw new Error("Failed to fetch posts");
//     }
//     const users = await userResponse.json();
//     const posts = await postsResponse.json();

//     if (users.length === 0 || posts.length === 0) {
//       throw new Error("No data found");
//     }

//     const result = users.map(({ id, name }) => {
//       const matchedPosts = posts.filter(({ userId }) => id === userId);
//       let totalChar = 0;
//       for (const { title } of matchedPosts) {
//         totalChar += title.length;
//       }
//       let postCount = matchedPosts.length;
//       const average = Number((totalChar / postCount).toFixed(1));
//       return {
//         name,
//         average,
//       };
//     });
//     result.sort((a, b) => b.average - a.average);
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
//     const postsResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/posts",
//     );
//     if (!userResponse.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     if (!postsResponse.ok) {
//       throw new Error("Failed to fetch posts");
//     }
//     const users = await userResponse.json();
//     const posts = await postsResponse.json();

//     if (users.length === 0 || posts.length === 0) {
//       throw new Error("No data found");
//     }

//     const result = users.map(({ id, name }) => {
//       const matchedPost = posts.filter(({ userId }) => id === userId);

//       let totalBodyChar = 0;
//       for (const { body } of matchedPost) {
//         totalBodyChar += body.length;
//       }
//       return {
//         name,
//         totalBodyChar,
//       };
//     });
//     result.sort((a, b) => b.totalBodyChar - a.totalBodyChar);
//     console.log(result[0].name);
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
//     const postsResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/posts",
//     );
//     if (!userResponse.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     if (!postsResponse.ok) {
//       throw new Error("Failed to fetch posts");
//     }
//     const users = await userResponse.json();
//     const posts = await postsResponse.json();

//     if (users.length === 0 || posts.length === 0) {
//       throw new Error("No data found");
//     }

//     const result = users.map(({ id, name }) => {
//       const matchedPost = posts.filter(({ userId }) => id === userId);
//       let longestTitleLength = 0;
//       for (const { title } of matchedPost) {
//         if (title.length > longestTitleLength) {
//           longestTitleLength = title.length;
//         }
//       }
//       return {
//         name,
//         longestTitleLength,
//       };
//     });
//     result.sort((a, b) => b.longestTitleLength - a.longestTitleLength);
//     console.log(`${result[0].name} - ${result[0].longestTitleLength}`);
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
//     if (users.length === 0 || posts.length === 0) {
//       throw new Error("No data found");
//     }

//     const result = users.map(({ id, name }) => {
//       const matchedPosts = posts.filter(({ userId }) => id === userId);
//       let shortestTitle = null;
//       for (const { title } of matchedPosts) {
//         if (shortestTitle === null) {
//           shortestTitle = title.length;
//         }
//         if (title.length < shortestTitle) {
//           shortestTitle = title.length;
//         }
//       }
//       return {
//         name,
//         shortestTitle,
//       };
//     });
//     result.sort((a, b) => a.shortestTitle - b.shortestTitle);
//     console.log(`${result[0].name} - ${result[0].shortestTitle}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// userInfo();

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

    const result = users.map(({ id, name }) => {
      const matchedPosts = posts.filter(({ userId }) => id === userId);
      const totalBodyTitle = matchedPosts.reduce(
        (sum, { title, body }) => sum + title.length + body.length,

        0,
      );

      return {
        name,
        totalBodyTitle,
      };
    });
    result.sort((a, b) => b.totalBodyTitle - a.totalBodyTitle);

    console.log(`${result[0].name} - ${result[0].totalBodyTitle}`);
  } catch (error) {
    console.log(error);
  }
}

usersInfo();
