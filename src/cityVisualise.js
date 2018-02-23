function cityVisualiserFunc(city) {
    var currentWeather = config.currentWeatherApi + city + config.key;
    var forecastWeather = config.forecastWeatherApi + city + config.key;

    $.get(currentWeather)
        .then(function(result) {
            var table = $('<table>').append( '<tr><td>' + 'Wind Speed' + '</td>' + '<td>' + result.wind.speed + ' m/s' + '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Wind Direction' + '</td>' + '<td>' + windDirectionProvider(result.wind.deg)  + '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Humidity' + '</td>' + '<td>' + result.main.humidity  + ' %' + '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Pressure' + '</td>' + '<td>' + result.main.pressure + ' hPa'  + '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Sunrise' + '</td>' + '<td>' +  unixToNormal(result.sys.sunrise) +  '</td>' + '</tr>' )
                                    .append( '<tr><td>' + 'Sunset' + '</td>' + '<td>' + unixToNormal(result.sys.sunset) +  '</td>' + '</tr>' )[0];

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
            $('#resultCity').html($(htmlProvider.cityNotFoundError(error)));
        });

    $.get(forecastWeather)
        .then(function(jsonResult) {

        })
        .catch(function(error) {
            
        });
}