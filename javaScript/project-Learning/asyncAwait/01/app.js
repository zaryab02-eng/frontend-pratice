async function userInfo() {
  try {
    const responseNames = await fetch(
      "https://jsonplaceholder.typicode.com/users",
    );
    const responsePosts = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    );

    if (!responseNames.ok) {
      throw new Error("Failed to fetch user names");
    }
    if (!responsePosts.ok) {
      throw new Error("Failed to fetch user names");
    }

    const users = await responseNames.json();
    const posts = await responsePosts.json();

    const result = users.map(({ id, name }) => {
      const userPosts = posts.filter(({ userId }) => userId === id);
      return {
        userName: name,
        postCount: userPosts.length,
      };
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const user = await userInfo();
  console.log(user);
}

main();
