const htmlProvider = {
    cityWeatherInfo(json){
        return  `<div id="city-weather">
                <h2 id="city-name">${json.name}</h2>
                <h3>${Math.round(json.main.temp - 273.15)} °C</h3>
                <img class="weather-icon" src="weatherIcons/${json.weather[0].icon}.png" alt="weatherIcon: ${json.weather[0].icon}">
            </div>
            <div id="city-addit-info">
                <table>
                    <tr>
                        <td>
                            Wind
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Speed
                        </td>
                        <td>
                            ${json.wind.speed} m/s
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Direction
                        </td>
                        <td>
                            ${windDirectionProvider(json.wind.deg)}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sunrise At:
                        </td>
                        <td>
                            ${timeProviderFunc(json.sys.sunrise)}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sunset At:
                        </td>
                        <td>
                            ${timeProviderFunc(json.sys.sunset)}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Pressure:
                        </td>
                        <td>
                            ${json.main.pressure} hPa
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Humidity:
                        </td>
                        <td>
                            ${json.main.humidity} %
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Minimum Daily Temperature:
                        </td>
                        <td>
                            ${Math.round(json.main.temp_min - 273.15)} °C
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Maximum Daily Temperature:
                        </td>
                        <td>
                            ${Math.round(json.main.temp_max - 273.15)} °C
                        </td>
                    </tr>
                </table>
            </div>`;
    },

    cityNotFoundError(error) {
        return `<h2 id="city-name">${error}</h2>
        <img class="weather-icon" src="wasdasd" alt="weatherIcon: noresult">`;
    }
};