async function userInfo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    const selectedUsers = data.reduce(
      (current, user) => {
        const { email } = user;
        if (email.endsWith(".biz") && !current.firstBizUser) {
          current.firstBizUser = user;
        }
        return {
          totalUsers: current.totalUsers + 1,
          bizEmailUsers: email.endsWith(".biz")
            ? current.bizEmailUsers + 1
            : current.bizEmailUsers,
          firstBizUser: current.firstBizUser,
        };
      },
      {
        totalUsers: 0,
        bizEmailUsers: 0,
        firstBizUser: null,
      },
    );
    console.log(selectedUsers);
  } catch (error) {
    console.log(error);
  }
}

userInfo();
