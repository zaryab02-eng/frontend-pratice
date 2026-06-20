// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
// }

// getPosts();

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPosts();
