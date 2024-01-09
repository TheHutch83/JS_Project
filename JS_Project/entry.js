const rootRef = document.getElementById("Weather_Container");
import { getLocation } from "./Location";

async function getweatherData(latitude, longitude) {
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=3da8a0c7ed934203261619eac46bb437`
    );

    console.log(result);
  } catch (err) {
    rootRef.innerHTML = `API down, try again later`;
  }
}

navigator.geolocation.getCurrentPosition(success, error);

function success(data) {
  const { latitude, longitude } = data.coords;
  console.log(data);
  getweatherData(latitude, longitude);
}
