   const page = document.getElementById("page");

    // 2️⃣ list every Tailwind bg-* class you'll ever use
    const allBgs = [
      "bg-black",
      "bg-white",
      "bg-red-600",
      "bg-yellow-300",
      "bg-green-600",
      "bg-blue-400",
    ];

    // 3️⃣ helper: remove all then add the one you want
    function switchBg(newBgClass) {
      page.classList.remove(...allBgs);
      page.classList.add(newBgClass);
    }

    // 4️⃣ wire up each button
    document.getElementById("white").onclick  = () => switchBg("bg-white");
    document.getElementById("red").onclick    = () => switchBg("bg-red-600");
    document.getElementById("yellow").onclick = () => switchBg("bg-yellow-300");
    document.getElementById("green").onclick  = () => switchBg("bg-green-500");
    document.getElementById("blue").onclick   = () => switchBg("bg-blue-400");