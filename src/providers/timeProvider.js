function unixToNormal(unixTime) {
    function strPad(n) {
        return String('0' + n).slice(-2);
    }

    var dateTime = new Date(unixTime * 1000);

    var hours = strPad(dateTime.getHours());
    var minutes = strPad(dateTime.getMinutes());
    var seconds = strPad(dateTime.getSeconds());

    var ampm = (hours < 12) ? 'am' : 'pm';

    return `${hours}:${minutes}:${seconds} ${ampm}`;
}
