import axios from 'axios'

const API = {
  END_POINT: "http://api.openweathermap.org/data/2.5/weather?q=",
  KEY: "&appid=ee356788128cce43945d9f061582f588",
}

const initialState = {
  weatherData: null,
  error: null,
}

const WEATHER_REQUEST = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

export const newWeatherData = form => dispatch => {
  axios.get(`${API.END_POINT}${form.city}${API.KEY}`).then((response) => {
    dispatch({
        type: WEATHER_REQUEST.SUCCESS,
        payload: response.data,
      })
  }).catch((error) => {
    if (error.response.data.message) {
      dispatch({
        type: WEATHER_REQUEST.ERROR,
        payload: error.response.data.message,
      })
    }
  })
}

export default function weatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER_REQUEST.SUCCESS:
      return {
        ...state,
        data: action.payload,
      }

    case WEATHER_REQUEST.ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}