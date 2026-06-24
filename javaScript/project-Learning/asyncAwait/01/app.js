async function userInfo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    const userSummary = data.reduce(
      (current, user) => {
        const { name, email } = user;
        if (email.endsWith(".biz") && !current.firstBizUser) {
          current.firstBizUser = user;
        }
        if (email.endsWith(".biz")) {
          current.lastBizUser = user;
          current.bizUsers.push({ name, email });
        }

        return {
          totalUsers: current.totalUsers + 1,
          firstBizUser: current.firstBizUser,
          lastBizUser: current.lastBizUser,
          bizUsers: current.bizUsers,
        };
      },
      {
        totalUsers: 0,
        firstBizUser: null,
        lastBizUser: null,
        bizUsers: [],
      },
    );
    console.log(userSummary);
  } catch (error) {
    console.log(error);
  }
}

userInfo();
