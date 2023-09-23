function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = `Temperature: ${data.main.temp} K`;
      document.getElementById('weatherResult').innerText = weatherInfo;
    })
    .catch(error => console.error('Error fetching weather data:', error));
}
