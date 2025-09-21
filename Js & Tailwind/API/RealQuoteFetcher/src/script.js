const button = document.getElementById("quoteBtn");
const display = document.getElementById("quoteDisplay");

button.addEventListener("click", async () => {
  try {
    display.innerText = "Loading...";

    // Generate random ayah number (1 to 6236 total ayahs in Quran)
    const randomAyah = Math.floor(Math.random() * 6236) + 1;

    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/${randomAyah}/en.asad`
    );
    const data = await response.json();

    display.innerText = `Verse ${randomAyah}: ${data.data.text}`;
  } catch (error) {
    display.innerText = "Failed to get verse";
  }
});
