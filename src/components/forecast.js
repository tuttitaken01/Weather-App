import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';


const Forecast = () => {
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState('')


    const getWeather = (event) => {
        if (event.keyCode === 13) {
            fetch(`${WEATHER_API_URL}/forecast?q=${city}&units=metric&appid=${WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(
                data => {
                    setWeatherData(data);
                    setCity('')
                }
            )
        }
    }

    return (
        <div>
            <div className="search-bar">
                <input type="text"
                placeholder="search city..."
                onChange={(e) => setCity(e.target.value)}
                value={city}
                onKeyDown={getWeather}/>
                </div>
                </div>
    )
}



export default Forecast;