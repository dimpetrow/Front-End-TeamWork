const visualiser = (function () {
    var oldCityAttrs = '';
    var currentWeather = '';

    const visualiseCity = function cityVisualiserFunc(city) {
        currentWeather = config.currentWeatherApi + city + config.key;
        var forecastWeather = config.forecastWeatherApi + city + config.key;

        $.get(currentWeather)
            .then(function (result) {
                var tableBuider = new TableBuilder();
                var tableRow = null;

                var windDir = windDirectionProvider(result.wind.deg);

                if (windDir != null) {
                    tableRow = (new TableRow()).AppendCol('Wind').AppendCol(result.wind.speed + ' m/s' + '<br>' + windDir);
                    tableBuider.AppendRow(tableRow);

                } else {
                    tableRow = (new TableRow()).AppendCol('Wind').AppendCol(result.wind.speed + ' m/s');
                    tableBuider.AppendRow(tableRow);
                }

                tableRow = (new TableRow()).AppendCol('Humidity').AppendCol(result.main.humidity + ' %');
                tableBuider.AppendRow(tableRow);
                tableRow = (new TableRow()).AppendCol('Pressure').AppendCol(result.main.pressure + ' hPa');
                tableBuider.AppendRow(tableRow);
                tableRow = (new TableRow()).AppendCol('Sunrise').AppendCol(unixToNormal(result.sys.sunrise));
                tableBuider.AppendRow(tableRow);
                tableRow = (new TableRow()).AppendCol('Sunset').AppendCol(unixToNormal(result.sys.sunset));
                tableBuider.AppendRow(tableRow);

                var img = $('<img>').attr('src', `images/${result.weather[0].icon}.png`).attr('class', 'img-size')[0];

                var newCityAttrs = `<h1 class="city-name">${result.name}</h1>
                                    ${img.outerHTML}
                                    <p class="city-info">${Math.round(result.main.temp - 273.15)} °C</p>
                                    <p class="city-info">${result.weather[0].description}</p>;`;

                $('#result-current-weather').html($(`<div id="city-weather" class="bordered shadowed inner">
                                                        <div id="new-city-weather" class="bordered shadowed inner">
                                                            ${newCityAttrs}
                                                        </div>
                                                        ${oldCityAttrs}
                                                    </div>
                                                    <div id="city-addit-info" class="bordered shadowed inner">
                                                        ${tableBuider.BuildHtml()}
                                                    </div>
                                                    `));

                animator.showNewCity(newCityAttrs);

                oldCityAttrs = newCityAttrs;
            })
            .catch(function () {
                alert('Invalid City!');

                $('#search-input input').val('');
            });

        $.get(forecastWeather)
            .then(function (result) {
                var intervals = result.list.slice(0, 8);

                $('#result-forecast .inner').each(function (index) {
                    var interval = this;
                    var img = $('<img>').attr('src', `images/${intervals[index].weather[0].icon}.png`).attr('class', 'img-size')[0];

                    $(interval).html(`
                                    <div class="addit-forecast-info bordered">
                                        <p class="forecast-info">H: ${intervals[index].main.humidity} %</p>
                                        <p class="forecast-info">P: ${intervals[index].main.pressure} hPa</p>
                                        <p class="forecast-info">Tmax: ${Math.round(intervals[index].main.temp_max - 273.15)} °C</p>
                                        <p class="forecast-info">Tmin: ${Math.round(intervals[index].main.temp_min - 273.15)} °C</p>
                                    </div>
                    
                                    <h1 class="forecast-time">${unixToNormal(intervals[index].dt)}</h1>
                                    ${img.outerHTML}
                                    <p class="city-info">${Math.round(intervals[index].main.temp - 273.15)} °C</p>
                                    <p class="city-info">${intervals[index].weather[0].description}</p>`);

                    var windDir = windDirectionProvider(intervals[index].wind.deg);

                    if (windDir != null) {
                        $(`#${interval.id} .addit-forecast-info`).append(`<p class="forecast-info">W: ${intervals[ index ].wind.speed} m/s<br> ${windDir}</p>`);
                    } else {
                        $(`#${interval.id} .addit-forecast-info`).append(`<p class="forecast-info">W: ${intervals[index].wind.speed} m/s</p>`);
                    }
                });
            });
    };

    const visualiseCities = function otherCitiesVisualize(...cities) {
        $('#otherTowns .inner').each(function (index) {
            currentWeather = config.currentWeatherApi + cities[index] + config.key;
            var town = this;

            $.get(currentWeather)
                .then(function (result) {
                    var img = $('<img>').attr('src', `images/${result.weather[0].icon}.png`).attr('class', 'img-size')[0];

                    $(town).append(`<a href="javascript:visualiser.visualiseCity('${result.name}');"></a>
                                    <h1 class="city-name">${result.name}</h1>
                                    ${img.outerHTML}
                                    <p class="city-info">${Math.round(result.main.temp - 273.15)} °C</p>
                                    <p class="city-info">${result.weather[0].description}</p>`);
                });
        });
    };

    return {
        visualiseCity: visualiseCity,
        visualiseCities: visualiseCities
    };
})();