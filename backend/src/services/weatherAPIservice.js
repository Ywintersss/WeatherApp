import axios from "axios";
import 'dotenv/config'

const WeatherAPIKey = process.env.WEATHER_API_KEY

const uri = `http://api.weatherapi.com/v1/forecast.json?key=${WeatherAPIKey}&`

const uriQuery = `q=London&days=1&aqi=no&alerts=n`

const getWeatherData = async (uri) => {
    try {
        const response = await axios.get(uri);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it outside
    }
};

const weatherFunctions = {
    getWeather: async () => {
        
    },

    getWeatherForecast: async () => {

    }
}
