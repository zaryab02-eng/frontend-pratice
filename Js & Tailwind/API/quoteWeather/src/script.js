const display = document.getElementById("dashboardDisplay");
const button = document.getElementById("dashboardBtn");

button.addEventListener("click", async () => {
  display.innerHTML = `<p class="text-gray-500">Loading Weather & Quote...</p>`;

  let weatherText = "";
  let quoteText = "";

  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=26.7606&longitude=83.3732&current_weather=true"
    );
    const weatherData = await response.json();
    weatherText = `🌤 Gorakhpur: ${weatherData.current_weather.temperature}°C`;
  } catch (error) {
    weatherText = "❌ Failed to get Weather Data";
  }

  try {
    const response = await fetch("https://quotes-api-self.vercel.app/quote");
    const quoteData = await response.json();
    quoteText = `💡 "${quoteData.quote}"<br><span class="text-sm text-gray-600">— ${quoteData.author}</span>`;
  } catch (error) {
    quoteText = "❌ Failed to get Quote";
  }

  display.innerHTML = `
    <p class="text-lg font-semibold text-indigo-700">${weatherText}</p>
    <p class="mt-2 text-base italic text-gray-800">${quoteText}</p>
  `;
});
