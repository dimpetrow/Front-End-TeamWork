var oldCityAttrs = '';

function cityVisualiserFunc(city) {
    var currentWeather = config.currentWeatherApi + city + config.key;
    var forecastWeather = config.forecastWeatherApi + city + config.key;

    $.get(currentWeather)
        .then(function (result) {
            var tableBuider = new TableBuilder();
            var tableRow = null;

            var windDir = windDirectionProvider(result.wind.deg);

            if (windDir != null) {
                tableRow = (new TableRow()).AppendCol("Wind").AppendCol(result.wind.speed + ' m/s' + '<br>' + windDir);
                tableBuider.AppendRow(tableRow);

            } else {
                tableRow = (new TableRow()).AppendCol("Wind").AppendCol(result.wind.speed + ' m/s');
                tableBuider.AppendRow(tableRow);
            }

            tableRow = (new TableRow()).AppendCol("Humidity").AppendCol(result.main.humidity + ' %');
            tableBuider.AppendRow(tableRow);
            tableRow = (new TableRow()).AppendCol("Pressure").AppendCol(result.main.pressure + ' hPa');
            tableBuider.AppendRow(tableRow);
            tableRow = (new TableRow()).AppendCol("Sunrise").AppendCol(unixToNormal(result.sys.sunrise));
            tableBuider.AppendRow(tableRow);
            tableRow = (new TableRow()).AppendCol("Sunset").AppendCol(unixToNormal(result.sys.sunset));
            tableBuider.AppendRow(tableRow);

            var img = $('<img>').attr("src", `images/${result.weather[0].icon}.png`)[0];

            var newCityAttrs =`<h1>${result.name}</h1>
            ${img.outerHTML}
            <p>${Math.round(result.main.temp - 273.15)} °C</p>
            <p>${result.weather[0].description}</p>;` 

            $('#result-current-weather').html($(`
            <div id="city-weather">
                <div id="new-city-weather">
                    ${newCityAttrs}
                </div>
                ${oldCityAttrs}
            </div>
            <div id="city-addit-info">
                ${tableBuider.BuildHtml()}
            </div>
            `));

            newCityAnimation(newCityAttrs);

            oldCityAttrs = newCityAttrs;
        })
        .catch(function (error) {
            alert('Invalid City!')
            $('#search-input input').val("");
        });

    $.get(forecastWeather)
        .then(function (result) {
            var intervals = result.list.slice(0, 8);

            $('#result-forecast ul li').each(function (index) {
                var interval = this;
                var img = $('<img>').attr("src", `images/${intervals[index].weather[0].icon}.png`)[0];

                $(interval).html(`
                                <div class="addit-forecast-info">
                                    <p>H: ${intervals[index].main.humidity} %</p>
                                    <p>P: ${intervals[index].main.pressure} hPa</p>
                                    <p>Tmax: ${Math.round(intervals[index].main.temp_max - 273.15)} °C</p>
                                    <p>Tmin: ${Math.round(intervals[index].main.temp_min - 273.15)} °C</p>
                                </div>
                
                                <h2>${unixToNormal(intervals[index].dt)}</h1>
                                ${img.outerHTML}
                                <p>${Math.round(intervals[index].main.temp - 273.15)} °C</p>
                                <p>${intervals[index].weather[0].description}</p>`);

                var windDir = windDirectionProvider(intervals[index].wind.deg);

                if (windDir != null) {
                    $(`.${interval.className} .addit-forecast-info`).append(`<p>W: ${intervals[index].wind.speed} m/s<br> ${windDir}</p>`);
                } else {
                    $(`.${interval.className} .addit-forecast-info`).append(`<p>W: ${intervals[index].wind.speed} m/s</p>`);
                }
            })
        });
}