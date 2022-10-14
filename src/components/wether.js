import axios from "axios";
import { api } from "../services/axios";
import { TextApp } from "./text";

const weatherApp = document.createElement("div");
const degreeBox = document.createElement("div");
const degreesText = document.createElement("p");
const iconWether = document.createElement("img");
const textCondition = document.createElement("p");
const textLocation = document.createElement("p");
export function WeatherApp() {
  getGeolocation();

  iconWether.classList.add("icon");
  weatherApp.classList.add("weather-box");
  degreeBox.classList.add("degree-box");

  degreeBox.append(iconWether, degreesText);
  weatherApp.append(textLocation, textCondition, degreeBox);

  return weatherApp;
}

async function getWether(lat, lon) {
  let url = `http://api.weatherapi.com/v1/current.json?key=3e756b6080f247079c9125141221310&q=${lat},${lon}&lang=pt`;
  return await axios.get(url).then((response) => {
    return {
      icon: response.data.current.condition.icon,
      condition: response.data.current.condition.text,
      tempCelsius: response.data.current.temp_c,
      region: response.data.location.region,
      country: response.data.location.country,
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
    textCondition.innerText = `${weather.condition}`;
    textLocation.innerText = `${weather.region}, ${weather.country}`;
  });
}
