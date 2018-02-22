function cityVisualiserFunc(city) {
    var currentWeather = config.currentWeatherApi + city + config.key;
    var forecastWeather = config.forecastWeatherApi + city + config.key;

    $.get(currentWeather)
        .then(function(result) {
            $('#resultCity').html($(`<h2>${result.name}</h2>
            <img src="weatherIcons/${result.weather[0].icon}.png" alt="weatherIcon: ${result.weather[0].icon}">`));
        })
        .catch(function(error) {
            $('#resultCity').html($(`<h2>An Error has Ocurred</h2>
            <img src="wasdasd" alt="weatherIcon: noresult">`));
        });

    $.get(forecastWeather)
        .then(function(result) {

        })
        .catch(function(error) {
            
        });
}