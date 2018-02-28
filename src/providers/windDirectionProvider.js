const windDirectionProvider = function windDirectionProviderFunc(degrees) {
    degrees = parseFloat(degrees) || null;

    if (degrees == null) {
        return null;
    }

    if (degrees >= 348.75 && degrees < 11.25) {
        return 'North';
    } else if (degrees >= 11.25 && degrees < 33.75) {
        return 'North - North East';
    } else if (degrees >= 33.75 && degrees < 56.25) {
        return 'North East';
    } else if (degrees >= 56.25 && degrees < 78.75) {
        return 'East - North East';
    } else if (degrees >= 78.75 && degrees < 101.25) {
        return 'East';
    } else if (degrees >= 101.25 && degrees < 123.75) {
        return 'East - South East';
    } else if (degrees >= 123.75 && degrees < 146.25) {
        return 'South East';
    } else if (degrees >= 146.25 && degrees < 168.75) {
        return 'South - South East';
    } else if (degrees >= 168.75 && degrees < 191.25) {
        return 'South';
    } else if (degrees >= 191.25 && degrees < 213.75) {
        return 'South - South West';
    } else if (degrees >= 213.75 && degrees < 236.25) {
        return 'South West';
    } else if (degrees >= 236.25 && degrees < 258.75) {
        return 'West - South West';
    } else if (degrees >= 258.75 && degrees < 281.25) {
        return 'West';
    } else if (degrees >= 281.25 && degrees < 303.75) {
        return 'West - North West';
    } else if (degrees >= 303.75 && degrees < 326.25) {
        return 'North West';
    } else if (degrees >= 326.25 && degrees < 348.75) {
        return 'North - North West';
    }
};