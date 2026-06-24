async function userInfo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    const userData = data.reduce(
      (current, user) => {
        const {
          name,
          address: { city },
        } = user;

        if (city.includes("South") && !current.firstSouthUser) {
          current.firstSouthUser = user;
        }

        if (city.includes("South")) {
          current.lastSouthUser = user;
          current.southUsers.push({ name, city });
        }
        return {
          totalUsers: current.totalUsers + 1,
          firstSouthUser: current.firstSouthUser,
          lastSouthUser: current.lastSouthUser,
          southUsers: current.southUsers,
        };
      },
      {
        totalUsers: 0,
        firstSouthUser: null,
        lastSouthUser: null,
        southUsers: [],
      },
    );
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
}

userInfo();
