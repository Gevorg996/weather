document.getElementById('city-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');

    const cityName = cityInput.value;

    fetch(`get_weather.php?city=${cityName}`)
        .then(response => response.json())
        .then(data => {
            if (data.name && data.main && data.weather && data.weather[0].description) {
                const temp = Math.round(data.main.temp - 273.15); 
                const description = data.weather[0].description;

                weatherInfo.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>${temp}°C, ${description}</p>
                `;
            } else {
                weatherInfo.innerHTML = 'Invalid weather data';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Error fetching weather data';
        });
});
