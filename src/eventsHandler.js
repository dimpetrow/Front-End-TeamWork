$("#search-input input").keyup(function(event) {
    if (event.keyCode === 13) {
        var city = ($("#search-input input")).val();

        visualiser.visualiseCity(city); 
    }
});

$('#result-forecast ul li').hover(function () {
    var listItem = this;

    animator.showForecastAdditionalInfo(listItem);
});