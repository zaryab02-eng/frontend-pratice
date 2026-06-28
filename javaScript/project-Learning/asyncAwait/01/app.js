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
      throw new Error("Failed to fetch posts");
    }

    const users = await responseNames.json();
    const posts = await responsePosts.json();

    const result = users.map(({ id, username }) => {
      const firstBody = posts.find(({ userId }) => id === userId);
      const { body = null } = firstBody ?? {};
      return {
        userName: username,
        firstPostBody: body,
      };
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

userInfo();
