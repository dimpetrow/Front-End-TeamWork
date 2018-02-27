cityVisualiserFunc("sofia");

otherCitiesVisualize(['Sofia', 'Varna', 'Plovdiv', 'Burgas', 'Veliko Tarnovo']);

$("#search-input input").keyup(function(event) {
    if (event.keyCode === 13) {
        var city = ($("#search-input input")).val();

        cityVisualiserFunc(city); 
    }
});