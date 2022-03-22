const API_KEY = "dd0bfe140c30f98994d28b9212ba9ee6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you :(");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
