$('#result-forecast ul li').hover(function () {
    var liNumber = this.id;

    $('#result-forecast #' + liNumber + ' .addit-forecast-info p').show();

    $('#result-forecast #' + liNumber + ' .addit-forecast-info').slideToggle(200);
});

function newCityAnimation(newCityAttrs) {
    $('#result-current-weather #new-city-weather h1').show();
    $('#result-current-weather #new-city-weather img').show();
    $('#result-current-weather #new-city-weather p').show(); 

    $('#result-current-weather #new-city-weather').slideDown(1000);
};