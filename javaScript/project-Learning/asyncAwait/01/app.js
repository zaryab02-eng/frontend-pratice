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
          address: { city },
          name,
        } = user;

        if (city.includes("South") && !current.firstSouthUser) {
          current.firstSouthUser = user;
        }

        if (city.includes("South")) {
          current.lastSouthUser = user;
          current.southUserNames.push(name);
        }

        return {
          totalUsers: current.totalUsers + 1,
          firstSouthUser: current.firstSouthUser,
          lastSouthUser: current.lastSouthUser,
          southUserNames: current.southUserNames,
        };
      },
      {
        totalUsers: 0,
        firstSouthUser: null,
        lastSouthUser: null,
        southUserNames: [],
      },
    );
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
}

userInfo();
