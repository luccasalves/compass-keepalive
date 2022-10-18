import axios from "axios";

const weatherApp = document.createElement("div");
const degreeBox = document.createElement("div");
const degreesText = document.createElement("p");
const iconWether = document.createElement("img");
const conditionText = document.createElement("p");
const locationText = document.createElement("p");
export function WeatherApp() {
  getGeolocation();

  iconWether.classList.add("icon");
  weatherApp.classList.add("weather-box");
  degreeBox.classList.add("degree-box");
  degreesText.classList.add("degree-text");
  conditionText.classList.add("text");
  locationText.classList.add("text");

  degreeBox.append(iconWether, degreesText);
  weatherApp.append(locationText, degreeBox);

  return weatherApp;
}

async function getWether(lat, lon) {
  let url = `http://api.weatherapi.com/v1/current.json?key=3e756b6080f247079c9125141221310&q=${lat},${lon}&lang=pt`;
  return await axios.get(url).then((response) => {
    return {
      icon: response.data.current.condition.icon
        ? response.data.current.condition.icon
        : "",
      condition: response.data.current.condition.text
        ? response.data.current.condition.text
        : "",
      tempCelsius: response.data.current.temp_c
        ? response.data.current.temp_c
        : "",
      region: response.data.location.region
        ? response.data.location.region
        : "",
      city: response.data.location.tz_id ? response.data.location.tz_id : "",
    };
  });
}

async function getGeolocation() {
  navigator.geolocation.getCurrentPosition(async (response) => {
    const coords = response.coords;

    const weather = await getWether(coords.latitude, coords.longitude);
    console.log(weather);

    iconWether.setAttribute("src", weather.icon);
    degreesText.innerText = `${weather.tempCelsius}º`;
    conditionText.innerText = `${weather.condition}`;
    locationText.innerText = `${weather.city} - ${weather.region}`;
  });
}
