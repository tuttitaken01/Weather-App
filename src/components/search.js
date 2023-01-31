import { useState } from 'react';
import { UNSPLASH_API_KEY, UNSPLASH_API_URL, WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';


const Search = () => {
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState('');
    const [img, setImg] = useState([]);

    let randNum = Math.floor(Math.random() * 10);

    const getWeather = (event) => {
        if (event.keyCode === 13) {
            fetch(`${WEATHER_API_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(
                data => {
                    setWeatherData(data);
                    fetch(`${UNSPLASH_API_URL}query=${city}&orientation=landscape&client_id=${UNSPLASH_API_KEY}`)
                    .then(res => res.json ())
                    .then(
                        data => {
                            setImg(data.results[randNum].urls.small)
                        }
                    )
                    setImg('')
                    setCity('')
                }
            )
        }
    }

    const iconUrlFromData = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;
    

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
                                alt="city"
                                height="200"
                                image={img} />
                            <CardContent className="content">
                                <p className='city'>{weatherData.name}</p>
                                <p className='desc'>{weatherData.weather[0].description}</p>
                                <img className="icon" src={iconUrlFromData(weatherData.weather[0].icon)} alt={weatherData.weather[0].description}/>
                                <div className="temperature">
                                <p className='temp'>{Math.round(weatherData.main.temp)}</p>
                                </div>
                                <div className="moredets">
                                <p className='deets'>feels like {Math.round(weatherData.main.feels_like)} °C</p>
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