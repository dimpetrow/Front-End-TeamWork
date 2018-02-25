function cityVisualiserFunc(city) {
    var currentWeather = config.currentWeatherApi + city + config.key;
    var forecastWeather = config.forecastWeatherApi + city + config.key;

    $.get(currentWeather)
        .then(function(result) {
            var table = $('<table>').append( '<tr><td>' + 'Wind' + '</td>' + '<td>' + result.wind.speed + ' m/s');

            var windDir = windDirectionProvider(result.wind.deg);

            if (windDir != null) {
                table.append( '\n' + windDir  + '</td>' + '</tr>' )
            }
            else {
                table.append( '</td>' + '</tr>' );
            }

            table.append( '<tr><td>' + 'Humidity' + '</td>' + '<td>' + result.main.humidity  + ' %' + '</td>' + '</tr>' )
                .append( '<tr><td>' + 'Pressure' + '</td>' + '<td>' + result.main.pressure + ' hPa'  + '</td>' + '</tr>' )
                .append( '<tr><td>' + 'Sunrise' + '</td>' + '<td>' +  unixToNormal(result.sys.sunrise) +  '</td>' + '</tr>' )
                .append( '<tr><td>' + 'Sunset' + '</td>' + '<td>' + unixToNormal(result.sys.sunset) +  '</td>' + '</tr>' );

            var img = $('<img>').attr("src",`images/${result.weather[0].icon}.png`)[0];

            $('#result-current-weather').html($(`
            <div id="city-weather">
                <h2>${result.name}</h2>
                ${img.outerHTML}
                <p>${Math.round(result.main.temp - 273.15)} °C</p>
                <p>${result.weather[0].description}</p>
            </div>
            <div id="city-addit-info">
                ${table[0].outerHTML}
            </div>
            `));
        })
        .catch(function(error) {
            $('#result-current-weather').html($(htmlProvider.cityNotFoundError(error)));
        });

    $.get(forecastWeather)
        .then(function(jsonResult) {

        })
        .catch(function(error) {
            
        });
}