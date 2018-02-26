$('#result-forecast ul li').hover(function() {
    var liNumber = this.className;

    $('#result-forecast .' + liNumber +' .addit-forecast-info').slideToggle( 200, function() {
        $('#result-forecast .' + liNumber +' .addit-forecast-info p').show( 100 );
    });
  });