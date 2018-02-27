function otherCitiesVisualize(cities) {
    $('#otherTowns > ul li').each(function (index) {
        var currentWeather = config.currentWeatherApi + cities[index] + config.key;
        var town = this;

        $.get(currentWeather)
            .then(function (result) {
                var img = $('<img>').attr("src", `images/${result.weather[0].icon}.png`).attr('class', 'img-size')[0];

                $(town).append(`<a href="#" onclick="javascript:cityVisualiserFunc('${result.name}');"></a>
                                <h1 class="city-name">${result.name}</h1>
                                ${img.outerHTML}
                                <p class="city-info">${Math.round(result.main.temp - 273.15)} °C</p>
                                <p class="city-info">${result.weather[0].description}</p>`);
            });
    });
}