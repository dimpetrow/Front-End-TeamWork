function cityVisualiserFunc(city) {
    var currentWeather = config.currentWeatherApi + city + config.key;
    var forecastWeather = config.forecastWeatherApi + city + config.key;

    $.get(currentWeather)
        .then(function(result) {
            var table = $('<table>').append( '<tr><td>' + 'Wind Speed' + '</td>' + '<td>' + result.wind.speed + ' m/s' + '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Wind Direction' + '</td>' + '<td>' + result.wind.deg  + '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Humidity' + '</td>' + '<td>' + result.main.humidity  + ' %' + '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Pressure' + '</td>' + '<td>' + result.main.pressure + ' hPa'  + '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Sunrise' + '</td>' + '<td>' + result.sys.sunrise + ' hPa'  + '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Sunset' + '</td>' + '<td>' + result.sys.sunset + ' hPa'  + '</td>' + '</tr>' )[0];

            var img = $('<img>').attr("src",`weatherIcons/${result.weather[0].icon}.png`).width("50px")[0];
            $('#resultCity').html($(`
            <div>
                <h2>${result.name}</h2>
                ${img.outerHTML}
            </div>
            <div>
                ${table.outerHTML}
            </div>
            `));
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