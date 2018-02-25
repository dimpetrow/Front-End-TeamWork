function cityVisualiserFunc(city) {
    var currentWeather = config.currentWeatherApi + city + config.key;
    var forecastWeather = config.forecastWeatherApi + city + config.key;

    $.get(currentWeather)
        .then(function (result) {
            var table = $('<table>');

            var windDir = windDirectionProvider(result.wind.deg);

            if (windDir != null) {
                table.append('<tr><td>' + 'Wind' + '</td>' + '<td>' + result.wind.speed + ' m/s' + '<br>' + windDir + '</td>' + '</tr>')
            } else {
                table.append('<tr><td>' + 'Wind' + '</td>' + '<td>' + result.wind.speed + ' m/s' + '</td>' + '</tr>');
            }

            table.append('<tr><td>' + 'Humidity' + '</td>' + '<td>' + result.main.humidity + ' %' + '</td>' + '</tr>')
                .append('<tr><td>' + 'Pressure' + '</td>' + '<td>' + result.main.pressure + ' hPa' + '</td>' + '</tr>')
                .append('<tr><td>' + 'Sunrise' + '</td>' + '<td>' + unixToNormal(result.sys.sunrise) + '</td>' + '</tr>')
                .append('<tr><td>' + 'Sunset' + '</td>' + '<td>' + unixToNormal(result.sys.sunset) + '</td>' + '</tr>');

            var img = $('<img>').attr("src", `images/${result.weather[0].icon}.png`)[0];

            $('#result-current-weather').html($(`
            <div id="city-weather">
                <h1>${result.name}</h1>
                ${img.outerHTML}
                <p>${Math.round(result.main.temp - 273.15)} °C</p>
                <p>${result.weather[0].description}</p>
            </div>
            <div id="city-addit-info">
                ${table[0].outerHTML}
            </div>
            `));
        })
        .catch(function (error) {
            alert('Invalid City!')
        });

    $.get(forecastWeather)
        .then(function (result) {
            var intervals = result.list.slice(0, 8);

            $('#result-forecast ul li').each(function (index) {
                var interval = this;
                var img = $('<img>').attr("src", `images/${intervals[index].weather[0].icon}.png`)[0];
                
                $(interval).html(`<h2>${unixToNormal(intervals[index].dt)}</h1>
                                ${img.outerHTML}
                                <p>${Math.round(intervals[index].main.temp - 273.15)} °C</p>
                                <p>${intervals[index].weather[0].description}</p>`);
            })
        });
}