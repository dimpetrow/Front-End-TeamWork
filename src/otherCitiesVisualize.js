function otherCitiesVisualize(cities) {
    $('#otherTowns > ul li').each(function (index) {
        var currentWeather = config.currentWeatherApi + cities[index] + config.key;
        var town = this;

        $.get(currentWeather)
            .then(function (result) {
                var img = $('<img>').attr("src", `images/${result.weather[0].icon}.png`)[0];

                $(town).append(`<a href="javascript:cityVisualiserFunc('${result.name}')"> </a>
                                <h1>${result.name}</h1>
                                ${img.outerHTML}
                                <p>${Math.round(result.main.temp - 273.15)} °C</p>
                                <p>${result.weather[0].description}</p>`);
            });
    });
}