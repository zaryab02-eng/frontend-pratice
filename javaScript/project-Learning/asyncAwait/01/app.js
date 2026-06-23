async function userInfo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    const user = data.map(
      ({ name, address: { city }, company: { name: companyName } }) => {
        return {
          name,
          city,
          companyName,
        };
      },
    );
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

userInfo();
