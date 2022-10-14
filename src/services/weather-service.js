async function getWether() {
  const url = `http://api.weatherapi.com/v1/current.json?key=3e756b6080f247079c9125141221310&q=London&aqi=no`;
  return await axios.get(url).then((response) => response.data.current);
}
