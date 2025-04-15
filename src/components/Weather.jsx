import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/myweather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const weatherKey = process.env.REACT_API_WEATHER_KEY;

    const fetchWeather = async () => {
        if (!city) {
            setError('Please enter a city.');
            return;
        }
        setLoading(true);
        setError(null);

        try {
            // Ensure API key is set
            if (!weatherKey) {
                setError('API key is missing or invalid');
                return;
            }

            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`
            );
            setWeather(response.data);
            console.log(response.data);
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Invalid API key or unable to access the API.');
            } else {
                setError('Could not fetch weather!');
            }
            console.error(err); // Log error for debugging
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="weather-container">
            <h1>Search Weather of Your City!</h1>
            <div className="weather-input">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city...."
                />
                <button className="weather-search" onClick={fetchWeather}>Search</button>
            </div>

            {loading && <p>Fetching the data for {city}...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weather && !loading && !error && (
                <div className="weather-info">
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
