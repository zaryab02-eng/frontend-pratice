async function userInfo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    const usersData = data.reduce(
      (current, user) => {
        const {
          address: { city },
        } = user;

        if (city.includes("South") && !current.firstSouthUser) {
          current.firstSouthUser = user;
        }
        if (city.includes("South")) {
          current.lastSouthUser = user;
        }
        return {
          totalUsers: current.totalUsers + 1,
          southCityUsers: city.includes("South")
            ? current.southCityUsers + 1
            : current.southCityUsers,
          firstSouthUser: current.firstSouthUser,
          lastSouthUser: current.lastSouthUser,
        };
      },
      {
        totalUsers: 0,
        southCityUsers: 0,
        firstSouthUser: null,
        lastSouthUser: null,
      },
    );
    console.log(usersData);
  } catch (error) {
    console.log(error);
  }
}

userInfo();
