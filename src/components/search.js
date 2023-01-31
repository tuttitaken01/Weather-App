import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
//import IconButton from '@mui/material/IconButton';
//import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState('')


    const getWeather = (event) => {
        if (event.keyCode === 13) {
            fetch(`${WEATHER_API_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(
                data => {
                    setWeatherData(data);
                    setCity('')
                }
            )
        }
    }

    const iconUrlFromData = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

    return (
        <div>
            <div className="search-bar">
                <input type="text"
                placeholder="search city..."
                onChange={(e) => setCity(e.target.value)}
                value={city}
                onKeyDown={getWeather}/>
                </div>
                {typeof weatherData.main === 'undefined' ? (
                    <div>
                        <></>
                    </div>
                ) : (
                    <div className='weather-data'>
                        <Card sx={{ maxWidth: 1000 }}>
                            <CardMedia
                                component="img"
                                alt="London"
                                height="200"
                                image="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE" />
                            <CardContent className="content">
                                <p className='city'>{weatherData.name}</p>
                                <p className='desc'>{weatherData.weather[0].description}</p>
                                <img className="icon" src={iconUrlFromData(weatherData.weather[0].icon)} alt={weatherData.weather[0].description}/>
                                <div className="temperature">
                                <p className='temp'>{weatherData.main.temp}</p>
                                </div>
                                <div className="moredets">
                                <p className='deets'>feels like {weatherData.main.feels_like} °C</p>
                                <p className='wind'>wind {weatherData.wind.speed} m/s</p>
                                <p className='humidity'>humidity {weatherData.main.humidity} %</p></div>
                                
                            </CardContent>
                        </Card>
                        
                    </div>
                )}

                {weatherData.cod === "404" ? (
                    <p>Uh-oh. We haven't found your city :(</p>
                ) : (
                    <></>
                )}
            </div>
    )
}

export default Search;