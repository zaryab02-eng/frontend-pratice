const weatherDisplay = document.getElementById("weatherDisplay");
const quoteDisplay = document.getElementById("quoteDisplay");
const quoteBtn = document.getElementById("quoteBtn");

async function showWeather() {
  try {
    weatherDisplay.innerText = "Gorakhpur Weather Loading...";
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=26.7606&longitude=83.3732&current_weather=true"
    );
    const data = await response.json();
    const temp = data.current_weather.temperature;
    const speed = data.current_weather.windspeed;

    weatherDisplay.innerText = `Gorakhpur Temperature: ${temp}°C & WindSpeed: ${speed}km/h`;
  } catch (error) {
    weatherDisplay.innerText = "Failed to get weather info!";
  }
}

showWeather();

quoteBtn.addEventListener("click", async () => {
  try {
    quoteDisplay.innerText = "Loading Quote...";
    const response = await fetch("https://quotes-api-self.vercel.app/quote");
    const data = await response.json();

    quoteDisplay.innerText = `"${data.quote}" - ${data.author}`;
  } catch (error) {
    quoteDisplay.innerText = "No Quote Found!!";
  }
});
