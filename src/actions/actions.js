import axios from 'axios';

const API_KEY = 'f63366b647a8ee49aa6dddbab5c1281c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},es`;

    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
