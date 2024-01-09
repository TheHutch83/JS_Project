// API KEY 3da8a0c7ed934203261619eac46bb437
// API URL CITY https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const currentTemp = document.getElementById("Current_Temp");
const highTemp = document.getElementById("High_Temp");
const lowTemp = document.getElementById("Low_Temp");
const getWeatherButton = document.getElementById("get-weather-button");
const cityInput = document.getElementById("City_Input");

getWeatherButton.addEventListener("click", () => {
  getWeather(cityInput.value);
});

async function getWeather(city) {
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Hexham&appid=3da8a0c7ed934203261619eac46bb437&units=metric`
    );
  } catch (error) {
    console.log("Error obtaining weather data:", error);
    weatherInfoRef.innerHTML = `API down, try again later`;
  }
}

function displayWeather(data) {
  currentTemp.innerHTML = `${result.data.main.temp.display} + c`;
  highTemp.innerHTML = `${result.data.main.temp_max.display} + c`;
  lowTemp.innterHTML = `${main.data.temp_min.display} + c`;
}
