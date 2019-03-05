import axios from 'axios'

const initialState = {
  weatherData: null,
}
const NEW_WEATHER_DATA = "NEW_WEATHER_DATA"
const API = {
  END_POINT: "http://api.openweathermap.org/data/2.5/weather?q=",
  KEY: "&appid=ee356788128cce43945d9f061582f588",
}

export const newWeatherData = form => dispatch => {
  axios.get(`${API.END_POINT}${form.city}${API.KEY}`).then((response) => {
    dispatch({
        type: NEW_WEATHER_DATA,
        payload: response.data,
      })
  })
}

export default function weatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_WEATHER_DATA:
      return {
        data: action.payload,
      }

    default:
      return state
  }
}