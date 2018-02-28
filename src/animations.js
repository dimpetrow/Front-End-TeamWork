var animator = (function () {
    var showNewCity = function newCityAnimation(newCityAttrs) {
        $('#result-current-weather #new-city-weather h1').show();
        $('#result-current-weather #new-city-weather img').show();
        $('#result-current-weather #new-city-weather p').show();

        $('#result-current-weather #new-city-weather').slideDown(1000);
    };

    var showForecastAdditionalInfo = function showForecastAdditionalInfoFunc(element) {
        $('#result-forecast #' + element.id + ' .addit-forecast-info p').show();

        $('#result-forecast #' + element.id + ' .addit-forecast-info').slideToggle(200);
    };

    return {
        showNewCity: showNewCity,
        showForecastAdditionalInfo: showForecastAdditionalInfo
    }
})();