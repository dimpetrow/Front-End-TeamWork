function unixToNormal(unixTime) {
    function str_pad(n) {
        return String("0" + n).slice(-2);
    }
    
    var dateTime = new Date(unixTime * 1000);

    var hours = str_pad(dateTime.getHours()); 
    var minutes = str_pad(dateTime.getMinutes()); 
    var seconds = str_pad(dateTime.getSeconds()); 

    var ampm = (hours < 12) ? "am" : "pm";

    return `${hours}:${minutes}:${seconds} ${ampm}`;
} 