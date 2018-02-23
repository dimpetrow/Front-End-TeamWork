// cityVisualiserFunc("sofia");

$("#searchInput input").keyup(function(event) {
    if (event.keyCode === 13) {
        var city = ($("#searchInput input")).val();

        cityVisualiserFunc(city);
    }
});